-- ==========================================
-- Supabase Schema & Seed Data for TAE Blogs
-- Run this in your Supabase SQL Editor.
-- ==========================================

-- 1. Create the posts table
CREATE TABLE IF NOT EXISTS public.posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    content TEXT NOT NULL,
    excerpt TEXT,
    cover_image TEXT,
    category TEXT DEFAULT 'General',
    author TEXT DEFAULT 'TAE Team',
    published_at TIMESTAMPTZ DEFAULT now(),
    read_time INTEGER DEFAULT 5,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Enable Row Level Security (RLS)
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- 3. Create a policy to allow public select (read) access
DROP POLICY IF EXISTS "Allow public read access" ON public.posts;
CREATE POLICY "Allow public read access" ON public.posts 
    FOR SELECT 
    USING (true);

-- 4. Seed sample blog posts (Markdown content supported in 'content')
INSERT INTO public.posts (title, slug, content, excerpt, cover_image, category, author, read_time, published_at)
VALUES
(
    'Embracing NEP 2020: How TAE is Revolutionizing Classroom Learning',
    'embracing-nep-2020-classroom-learning',
    '# Embracing NEP 2020: How TAE is Revolutionizing Classroom Learning

The National Education Policy (NEP) 2020 marks a historic turning point in the Indian education landscape. At **The Academy of Excellence (TAE)**, we have been at the forefront of implementing these guidelines, shifting from a rote-learning methodology to a multi-disciplinary, experiential, and student-centric paradigm.

Here is a closer look at how the NEP framework is being integrated into our classrooms daily:

---

## 1. Experiential Learning & STEM Integration
Instead of reading about circuits solely from textbooks, our Grade 5 students build actual prototypes in our state-of-the-art STEM Lab. We believe that conceptual clarity comes from active tinkering. 

* **Practical Lab Sessions**: Daily sessions dedicated to scientific experimentation.
* **Tinkering Projects**: Hands-on assembly of robotics kits, simple motors, and structural models.
* **Integrated Learning**: Bridging math and physics through interactive software games.

> "Tell me and I forget. Teach me and I remember. Involve me and I learn."  
> — *Benjamin Franklin*

---

## 2. Flex-Disciplinary Subject Selection
High school students at TAE are no longer pigeonholed into rigid streams. A Grade 11 science student can choose to study Business Studies alongside Physics, or pair Computer Science with Humanities and Classical Music. This encourages lateral thinking and allows students to cultivate diverse talents.

## 3. Cognitive & Formative Evaluations
We have transitioned away from high-stress, single-sitting exams for young minds. Instead, our assessment methodologies focus on:
1. **Peer-Evaluations**: Teaching children to collaborate and give constructive feedback.
2. **Project Exhibitions**: Presentations where students explain concepts to parents and peers.
3. **Continuous Assessments**: Short quizzes, classroom debates, and digital portfolios.

By aligning with the NEP 2020 guidelines, we are not just preparing students for exams; we are building lifelong learners who are critical thinkers, problem solvers, and global citizens.',
    'Explore how The Academy of Excellence is implementing the National Education Policy 2020 guidelines to shift from rote learning to multi-disciplinary, experiential, and student-centric classroom education.',
    'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80',
    'Academics',
    'Dr. Aruna Sen, Director of Academics',
    5,
    NOW() - INTERVAL '2 days'
),
(
    'Nurturing Critical Thinkers: The Importance of STEM & Robotics in Early Education',
    'nurturing-critical-thinkers-stem-robotics',
    '# Nurturing Critical Thinkers: The Importance of STEM & Robotics in Early Education

As we navigate the 21st century, technology has become an inseparable part of our lives. In this digital era, teaching kids how to write code or understand algorithms is not just about producing computer science graduates—it is about cultivating critical thinking, logical reasoning, and collaborative problem-solving skills.

At **The Academy of Excellence**, our STEM & Robotics curriculum starts right from Grade 1. Here is why early coding and mechanical building matter:

---

## Why STEM from Grade 1?

1. **Developing Spatial Intelligence**  
   When children build robotic models using gears, motors, and sensors, they develop a spatial and tactile understanding of physics and geometry.
2. **Learning through Trial and Error**  
   Debugging code teaches resilience. When a program does not run, students do not see it as a failure; they see it as a bug to be solved. This builds an invaluable growth mindset.
3. **Collaboration & Communication**  
   Our robotics lab works on a pair-programming system. Two students share a single device and kit, forcing them to communicate, delegate, and cooperate to achieve their goal.

---

## Our State-Of-The-Art Labs
TAE has partnered with leading global educational technology firms to install:
- **Lego Mindstorms** and WeDo kits for elementary school projects.
- **Arduino & Raspberry Pi** hardware boards for high school innovators.
- **3D Printing Stations** where children can bring their digital designs to physical life.

```python
# A simple autonomous navigation loop taught in Grade 6 Coding
def navigate_robot(distance_sensor):
    while True:
        if distance_sensor.get_distance_cm() < 15:
            robot.stop()
            robot.turn_right(90)
        else:
            robot.move_forward(speed=50)
```

By encouraging students to engage with these technologies early, we demystify science and make learning an adventurous, creative pursuit.',
    'Discover how early exposure to coding, robotics, and engineering builds logic, spatial reasoning, resilience, and problem-solving skills in young learners.',
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    'STEM',
    'Mr. Rajesh Nair, Robotics Lab Lead',
    6,
    NOW() - INTERVAL '5 days'
),
(
    'A Parent Guide to Managing Screen Time & Encouraging Digital Wellness',
    'parent-guide-managing-screen-time-digital-wellness',
    '# A Parent Guide to Managing Screen Time & Encouraging Digital Wellness

"How much screen time is too much?" This is perhaps the most common question parents ask our student counselors during parent-teacher interactions. In a world where school assignments, socialization, and entertainment all happen behind screens, finding a balance is challenging but critical.

At **The Academy of Excellence**, we practice digital citizenship and wellness. Here is a guided plan for parents to establish healthy screen boundaries at home:

---

## 1. The 3 D’s of Screen Time
Not all screen time is created equal. We encourage parents to categorize screen usage into three types:

* **Digitally Active (Creation)**: Writing blogs, editing video, coding, digital drawing. *Highly encouraged.*
* **Digitally Interactive (Communication)**: Online study groups, video calls with grandparents, educational quizzes. *Moderate usage.*
* **Digitally Passive (Consumption)**: Endless scrolling on social feeds, streaming videos. *Should be limited.*

---

## 2. Establish "Tech-Free Zones"
The simplest way to build healthy habits is by creating physical boundaries:
1. **The Dining Table**: Dinner should be a device-free conversation time.
2. **The Bedroom**: Keep chargers in the living room. Research shows that keeping screens out of bedrooms improves sleep quality dramatically.
3. **One Hour Before Bed**: Blue light from screens suppresses melatonin. Turning off screens an hour before bed promotes restful rest.

---

## 3. Co-Engage in Technology
Instead of monitoring kids from a distance, play games together, watch tutorials, or learn a digital skill as a family. Co-engagement turns screen time into bonding time and allows parents to model healthy online etiquette.

> "Technology is a useful servant but a dangerous master."  
> — *Christian Lous Lange*

By creating collaborative rules and fostering digital mindfulness, we can guide our children to use technology as an empowering tool rather than a distraction.',
    'Screens are everywhere. Read our counselor''s guide on setting boundaries, categorizing screen time, and encouraging active creation over passive consumption.',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    'Parents Guide',
    'Ms. Priya Sharma, Senior Student Counselor',
    4,
    NOW() - INTERVAL '10 days'
);
