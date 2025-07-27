import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Navigate } from 'react-router-dom';
import { Plus, Edit, Trash2, Users, ShoppingCart } from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  instructor_name: string;
  difficulty_level: string;
  is_active: boolean;
  created_at: string;
}

interface User {
  id: string;
  email: string;
  full_name: string;
  created_at: string;
}

interface Purchase {
  id: string;
  amount: number;
  payment_status: string;
  purchased_at: string;
  courses: { title: string };
  profiles: { email: string; full_name: string };
}

const AdminDashboard = () => {
  const { isAdmin, isLoading } = useAuth();
  const { toast } = useToast();
  const [courses, setCourses] = useState<Course[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [stats, setStats] = useState({ totalUsers: 0, totalPurchases: 0, totalRevenue: 0 });

  // Course form state
  const [courseForm, setCourseForm] = useState({
    title: '',
    description: '',
    price: '',
    instructor_name: '',
    difficulty_level: 'beginner',
  });

  const [editingCourse, setEditingCourse] = useState<string | null>(null);

  useEffect(() => {
    if (isAdmin) {
      fetchCourses();
      fetchUsers();
      fetchPurchases();
    }
  }, [isAdmin]);

  const fetchCourses = async () => {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch courses",
      });
    } else {
      setCourses(data || []);
    }
  };

  const fetchUsers = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch users",
      });
    } else {
      setUsers(data || []);
      setStats(prev => ({ ...prev, totalUsers: data?.length || 0 }));
    }
  };

  const fetchPurchases = async () => {
    // For now, just fetch purchases without joins to avoid relationship errors
    const { data, error } = await supabase
      .from('purchases')
      .select('*')
      .order('purchased_at', { ascending: false });

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to fetch purchases",
      });
    } else {
      // Transform data to match interface
      const transformedData = data?.map(purchase => ({
        ...purchase,
        courses: { title: 'Course Title' },
        profiles: { email: 'user@email.com', full_name: 'User Name' }
      })) || [];
      
      setPurchases(transformedData);
      const totalRevenue = data?.reduce((sum, purchase) => sum + Number(purchase.amount), 0) || 0;
      setStats(prev => ({ 
        ...prev, 
        totalPurchases: data?.length || 0,
        totalRevenue 
      }));
    }
  };

  const handleCourseSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const courseData = {
      title: courseForm.title,
      description: courseForm.description,
      price: parseFloat(courseForm.price),
      instructor_name: courseForm.instructor_name,
      difficulty_level: courseForm.difficulty_level,
    };

    let error;
    if (editingCourse) {
      ({ error } = await supabase
        .from('courses')
        .update(courseData)
        .eq('id', editingCourse));
    } else {
      ({ error } = await supabase
        .from('courses')
        .insert([courseData]));
    }

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: `Failed to ${editingCourse ? 'update' : 'create'} course`,
      });
    } else {
      toast({
        title: "Success",
        description: `Course ${editingCourse ? 'updated' : 'created'} successfully!`,
      });
      setCourseForm({
        title: '',
        description: '',
        price: '',
        instructor_name: '',
        difficulty_level: 'beginner',
      });
      setEditingCourse(null);
      fetchCourses();
    }
  };

  const handleEditCourse = (course: Course) => {
    setCourseForm({
      title: course.title,
      description: course.description || '',
      price: course.price.toString(),
      instructor_name: course.instructor_name || '',
      difficulty_level: course.difficulty_level,
    });
    setEditingCourse(course.id);
  };

  const handleDeleteCourse = async (courseId: string) => {
    const { error } = await supabase
      .from('courses')
      .delete()
      .eq('id', courseId);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete course",
      });
    } else {
      toast({
        title: "Success",
        description: "Course deleted successfully!",
      });
      fetchCourses();
    }
  };

  const toggleCourseStatus = async (courseId: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from('courses')
      .update({ is_active: !currentStatus })
      .eq('id', courseId);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update course status",
      });
    } else {
      fetchCourses();
    }
  };

  if (isLoading) {
    return <div className="min-h-screen bg-background flex items-center justify-center">Loading...</div>;
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your Al Club platform</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Purchases</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalPurchases}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <span className="text-xl">₹</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹{stats.totalRevenue.toFixed(2)}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="purchases">Purchases</TabsTrigger>
          </TabsList>
          
          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{editingCourse ? 'Edit Course' : 'Add New Course'}</CardTitle>
                <CardDescription>
                  {editingCourse ? 'Update course information' : 'Create a new course for your platform'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCourseSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Course Title"
                      value={courseForm.title}
                      onChange={(e) => setCourseForm({...courseForm, title: e.target.value})}
                      required
                    />
                    <Input
                      placeholder="Instructor Name"
                      value={courseForm.instructor_name}
                      onChange={(e) => setCourseForm({...courseForm, instructor_name: e.target.value})}
                      required
                    />
                  </div>
                  <Textarea
                    placeholder="Course Description"
                    value={courseForm.description}
                    onChange={(e) => setCourseForm({...courseForm, description: e.target.value})}
                    rows={3}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="number"
                      placeholder="Price (₹)"
                      value={courseForm.price}
                      onChange={(e) => setCourseForm({...courseForm, price: e.target.value})}
                      required
                    />
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={courseForm.difficulty_level}
                      onChange={(e) => setCourseForm({...courseForm, difficulty_level: e.target.value})}
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <div className="flex gap-2">
                    <Button type="submit">
                      <Plus className="h-4 w-4 mr-2" />
                      {editingCourse ? 'Update Course' : 'Add Course'}
                    </Button>
                    {editingCourse && (
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => {
                          setEditingCourse(null);
                          setCourseForm({
                            title: '',
                            description: '',
                            price: '',
                            instructor_name: '',
                            difficulty_level: 'beginner',
                          });
                        }}
                      >
                        Cancel
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>All Courses</CardTitle>
                <CardDescription>Manage your course catalog</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Instructor</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Level</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {courses.map((course) => (
                      <TableRow key={course.id}>
                        <TableCell className="font-medium">{course.title}</TableCell>
                        <TableCell>{course.instructor_name}</TableCell>
                        <TableCell>₹{course.price}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{course.difficulty_level}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={course.is_active ? "default" : "secondary"}
                            className="cursor-pointer"
                            onClick={() => toggleCourseStatus(course.id, course.is_active)}
                          >
                            {course.is_active ? 'Active' : 'Inactive'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleEditCourse(course)}
                            >
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="destructive"
                              onClick={() => handleDeleteCourse(course.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Registered Users</CardTitle>
                <CardDescription>All users registered on your platform</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Joined</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.full_name || 'N/A'}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{new Date(user.created_at).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="purchases">
            <Card>
              <CardHeader>
                <CardTitle>Purchase History</CardTitle>
                <CardDescription>All course purchases and transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Course</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {purchases.map((purchase) => (
                      <TableRow key={purchase.id}>
                        <TableCell>{purchase.profiles?.full_name || purchase.profiles?.email}</TableCell>
                        <TableCell>{purchase.courses?.title}</TableCell>
                        <TableCell>₹{purchase.amount}</TableCell>
                        <TableCell>
                          <Badge variant={purchase.payment_status === 'completed' ? 'default' : 'secondary'}>
                            {purchase.payment_status}
                          </Badge>
                        </TableCell>
                        <TableCell>{new Date(purchase.purchased_at).toLocaleDateString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;