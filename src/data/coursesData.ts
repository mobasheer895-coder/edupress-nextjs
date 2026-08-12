export type State = {
  courses: {
    allCourses: Array<Course>;
    currentPage:number
  };
};
export interface Lesson {
  title: string;
  duration: string;
  isLocked: boolean; // لإظهار أيقونة القفل
}
export interface CurriculumSection {
  titleBar: string;
  lessoncount: string;
  mins: string;
  lessonss?: Lesson[];
}

export interface overviewData {
  overviewText: string;
  lastOverviewText: string;
}
export interface InstractorBioData {
    imgInstractor: string;
    titleInstractor: string;
    subTitleInstractor: string;
    studentsInstractor: string;
    lessonsInstractor: string;
    descriptionInstractor : string
    social: string; // قد تحتاج لجعلها مصفوفة إذا كان هناك أكثر من رابط تواصل
}
interface FaqsData {
  title : string
  description : string
}

interface Ratingreview {
  averageRating: string;      // 4.0
  ratingLabel: string;        // "based on 146,951 ratings"
}

export interface StarDistributionRow {
  stars: number;      // عدد النجوم (من 5 إلى 1)
  percentage: number; // النسبة المئوية (90, 5, 2, 2, 1)
}

export interface Comment {
  id: string | number;
  userAvatar: string;      // رابط صورة المستخدم
  userName: string;        // اسم المستخدم
  date: string;            // تاريخ التعليق
  content: string;       // نص التعليق
}
// بيانات الكورس بشكل كامل
export interface Course {
    titlereviews ?: string
  titleSection?: string;
  id: string;
  image: string;
  title: string;
  category: string;
  firstInstructor: string;
  instructor: string;
  duration: string;
  students: string;
  levels?: string;
  lessons?: string;
  quizzes?: string;
  price: string;
  dealPrice?: string;
  subPrice: string;
  btnContent: string;
  overView: overviewData[];
  curriculum?: CurriculumSection[];
  instructorBio?: InstractorBioData[];
  faqs?: FaqsData[];
  Ratingreview?: Ratingreview;
  starsDistribution?: StarDistributionRow[];
  comments?: Comment[];
}
// النصوص المكتوبة ضمن كل كورس
export const allCourses: Course[] = [
  {
    id: "1",
    category: "Photography",
    title: "Mastering Photography",
    firstInstructor: "by ",
    instructor: "Determined-Poitras",
    duration: "2 Weeks",
    students: "156 students",
    lessons: "20 lessons",
    price: "$29.0",
    subPrice: "Free",
    image: "/images/eduma.png",
    btnContent: "View more",
    overView: [{ overviewText: "Master the art of light and composition.", lastOverviewText: "Learn professional DSLR techniques." }],
    titleSection: "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
    curriculum: [
    {
      titleBar: "Lessons with video content",
      lessoncount: "5 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "3 Lessons",
      mins: "50 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "4 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    }
  ],
    instructorBio : [
      {
        imgInstractor : "/images/Frame.png",
        titleInstractor : "ThimPress",
        subTitleInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        studentsInstractor : "156 Students",
        lessonsInstractor : "20 Lessons",
        descriptionInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        social : "Follow: "
      }
    ],
    faqs: [
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." }
    ],
      titlereviews : "comments",
    Ratingreview: {
    averageRating: "4.0",
    ratingLabel: "based on 146,951 ratings"
  },
  
  starsDistribution: [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ],
  
  comments: [
    {
      id: "1",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "2",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "3",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "4",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "5",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "6",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "7",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    
    {
      id: "8",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "9",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
  ]
  },
  {
    id: "2",
    category: "Development",
    title: "Web Development Basics",
    firstInstructor: "by ",
    instructor: "Determined-Poitras",
    duration: "3 Weeks",
    students: "200 students",
    lessons: "20 Lessons",
    levels: "All Levels",
    quizzes: "3 quizzes",
    price: "$39.0",
    dealPrice: "$49.0",
    subPrice: "Free",
    image: "/images/eduma.png",
    btnContent: "View more",
    overView: [{ overviewText: "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online. You can create a course curriculum with lessons & quizzes included which is managed with an easy-to-use interface for users. Having this WordPress LMS Plugin, now you have a chance to quickly and easily create education, online school, online-course websites with no coding knowledge required.", lastOverviewText: "LearnPress is free and always will be, but it is still a premium high-quality WordPress Plugin that definitely helps you with making money from your WordPress Based LMS. Just try and see how amazing it is. LearnPress WordPress Online Course plugin is lightweight and super powerful with lots of Add-Ons to empower its core system.How to use WPML Add-on for LearnPress?No comments yet! You be the first to comment." }],
    titleSection: "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
    curriculum: [
    {
      titleBar: "Lessons with video content",
      lessoncount: "5 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "3 Lessons",
      mins: "50 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "4 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    }
  ],
    instructorBio : [
      {
        imgInstractor : "/images/Frame.png",
        titleInstractor : "ThimPress",
        subTitleInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        studentsInstractor : "156 Students",
        lessonsInstractor : "20 Lessons",
        descriptionInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        social : "Follow: "
      }
    ],
    faqs: [
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." }
    ],
      titlereviews : "comments",
    Ratingreview: {
    averageRating: "4.0",
    ratingLabel: "based on 146,951 ratings"
  },
  
  starsDistribution: [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ],
  
  comments: [
    {
      id: "1",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "2",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "3",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "4",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "5",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "6",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "7",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    
    {
      id: "8",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "9",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
  ]
},
  {
    id: "3",
    category: "Design",
    title: "Advanced UI Design",
    firstInstructor: "by ",
    instructor: "Determined-Poitras",
    duration: "4 Weeks",
    students: "120 students",
    price: "$49.0",
    subPrice: "Free",
    image: "/images/eduma.png",
    btnContent: "View more",
    overView: [{ overviewText: "Advanced UI principles and systems.", lastOverviewText: "Master Figma for modern design." }],
    titleSection: "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
    curriculum: [
    {
      titleBar: "Lessons with video content",
      lessoncount: "5 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "3 Lessons",
      mins: "50 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "4 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    }
  ],
    instructorBio : [
      {
        imgInstractor : "/images/Frame.png",
        titleInstractor : "ThimPress",
        subTitleInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        studentsInstractor : "156 Students",
        lessonsInstractor : "20 Lessons",
        descriptionInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        social : "Follow: "
      }
    ],
    faqs: [
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." }
    ],
      titlereviews : "comments",
    Ratingreview: {
    averageRating: "4.0",
    ratingLabel: "based on 146,951 ratings"
  },
  
  starsDistribution: [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ],
  
  comments: [
    {
      id: "1",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "2",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "3",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "4",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "5",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "6",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "7",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    
    {
      id: "8",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "9",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
  ]
  },
  {
    id: "4",
    category: "Writing",
    title: "Creative Writing 101",
    firstInstructor: "by ",
    instructor: "Determined-Poitras",
    duration: "2 Weeks",
    students: "85 students",
    price: "$19.0",
    subPrice: "Free",
    image: "/images/eduma.png",
    btnContent: "View more",
    overView: [{ overviewText: "Unlock your creative potential.", lastOverviewText: "Learn structure and storytelling." }],
    titleSection: "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
    curriculum: [
    {
      titleBar: "Lessons with video content",
      lessoncount: "5 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "3 Lessons",
      mins: "50 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "4 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    }
  ],
    instructorBio : [
      {
        imgInstractor : "/images/Frame.png",
        titleInstractor : "ThimPress",
        subTitleInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        studentsInstractor : "156 Students",
        lessonsInstractor : "20 Lessons",
        descriptionInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        social : "Follow: "
      }
    ],
    faqs: [
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." }
    ],
      titlereviews : "comments",
    Ratingreview: {
    averageRating: "4.0",
    ratingLabel: "based on 146,951 ratings"
  },
  
  starsDistribution: [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ],
  
  comments: [
    {
      id: "1",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "2",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "3",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "4",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "5",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "6",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "7",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    
    {
      id: "8",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "9",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
  ]
  },
  {
    id: "5",
    category: "Science",
    title: "Introduction to Physics",
    firstInstructor: "by ",
    instructor: "Determined-Poitras",
    duration: "5 Weeks",
    students: "300 students",
    price: "$59.0",
    subPrice: "Free",
    image: "/images/eduma.png",
    btnContent: "View more",
    overView: [{ overviewText: "Fundamentals of motion and energy.", lastOverviewText: "Practical physics in everyday life." }],
    titleSection: "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
    curriculum: [
    {
      titleBar: "Lessons with video content",
      lessoncount: "5 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "3 Lessons",
      mins: "50 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "4 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    }
  ],
    instructorBio : [
      {
        imgInstractor : "/images/Frame.png",
        titleInstractor : "ThimPress",
        subTitleInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        studentsInstractor : "156 Students",
        lessonsInstractor : "20 Lessons",
        descriptionInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        social : "Follow: "
      }
    ],
    faqs: [
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." }
    ],
      titlereviews : "comments",
    Ratingreview: {
    averageRating: "4.0",
    ratingLabel: "based on 146,951 ratings"
  },
  
  starsDistribution: [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ],
  
  comments: [
    {
      id: "1",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "2",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "3",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "4",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "5",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "6",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "7",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    
    {
      id: "8",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "9",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
  ]
  },
  {
    id: "6",
    category: "Photography",
    title: "Portrait Photography",
    firstInstructor: "by ",
    instructor: "Determined-Poitras",
    duration: "2 Weeks",
    students: "140 students",
    price: "$25.0",
    subPrice: "Free",
    image: "/images/eduma.png",
    btnContent: "View more",
    overView: [{ overviewText: "Capture human expression.", lastOverviewText: "Techniques for great studio portraits." }],
    titleSection: "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
    curriculum: [
    {
      titleBar: "Lessons with video content",
      lessoncount: "5 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "3 Lessons",
      mins: "50 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "4 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    }
  ],
    instructorBio : [
      {
        imgInstractor : "/images/Frame.png",
        titleInstractor : "ThimPress",
        subTitleInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        studentsInstractor : "156 Students",
        lessonsInstractor : "20 Lessons",
        descriptionInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        social : "Follow: "
      }
    ],
    faqs: [
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." }
    ],
      titlereviews : "comments",
    Ratingreview: {
    averageRating: "4.0",
    ratingLabel: "based on 146,951 ratings"
  },
  
  starsDistribution: [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ],
  
  comments: [
    {
      id: "1",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "2",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "3",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "4",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "5",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "6",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "7",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    
    {
      id: "8",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "9",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
  ]
  },
  {
    id: "7",
    category: "Development",
    title: "React JS Fundamentals",
    firstInstructor: "by ",
    instructor: "Determined-Poitras",
    duration: "6 Weeks",
    students: "450 students",
    price: "$99.0",
    subPrice: "Free",
    image: "/images/eduma.png",
    btnContent: "View more",
    overView: [{ overviewText: "Learn components and hooks.", lastOverviewText: "Build state-driven applications." }],
    titleSection: "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
    curriculum: [
    {
      titleBar: "Lessons with video content",
      lessoncount: "5 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "3 Lessons",
      mins: "50 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "4 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    }
  ],
    instructorBio : [
      {
        imgInstractor : "/images/Frame.png",
        titleInstractor : "ThimPress",
        subTitleInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        studentsInstractor : "156 Students",
        lessonsInstractor : "20 Lessons",
        descriptionInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        social : "Follow: "
      }
    ],
    faqs: [
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." }
    ],
      titlereviews : "comments",
    Ratingreview: {
    averageRating: "4.0",
    ratingLabel: "based on 146,951 ratings"
  },
  
  starsDistribution: [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ],
  
  comments: [
    {
      id: "1",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "2",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "3",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "4",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "5",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "6",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "7",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    
    {
      id: "8",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "9",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
  ]
  },
  {
    id: "8",
    category: "Design",
    title: "Logo Design Mastery",
    firstInstructor: "by ",
    instructor: "Determined-Poitras",
    duration: "3 Weeks",
    students: "210 students",
    price: "$35.0",
    subPrice: "Free",
    image: "/images/eduma.png",
    btnContent: "View more",
    overView: [{ overviewText: "Principles of brand identity.", lastOverviewText: "Create iconic logos from concepts." }],
    titleSection: "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
    curriculum: [
    {
      titleBar: "Lessons with video content",
      lessoncount: "5 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "3 Lessons",
      mins: "50 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "4 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    }
  ],
    instructorBio : [
      {
        imgInstractor : "/images/Frame.png",
        titleInstractor : "ThimPress",
        subTitleInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        studentsInstractor : "156 Students",
        lessonsInstractor : "20 Lessons",
        descriptionInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        social : "Follow: "
      }
    ],
    faqs: [
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." }
    ],
      titlereviews : "comments",
    Ratingreview: {
    averageRating: "4.0",
    ratingLabel: "based on 146,951 ratings"
  },
  
  starsDistribution: [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ],
  
  comments: [
    {
      id: "1",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "2",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "3",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "4",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "5",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "6",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "7",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    
    {
      id: "8",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "9",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
  ]
  },
  {
    id: "9",
    category: "Writing",
    title: "Technical Writing",
    firstInstructor: "by ",
    instructor: "Determined-Poitras",
    duration: "2 Weeks",
    students: "95 students",
    price: "$20.0",
    subPrice: "Free",
    image: "/images/eduma.png",
    btnContent: "View more",
    overView: [{ overviewText: "Clear documentation practices.", lastOverviewText: "Explain complex concepts easily." }],
    titleSection: "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
    curriculum: [
    {
      titleBar: "Lessons with video content",
      lessoncount: "5 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "3 Lessons",
      mins: "50 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "4 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    }
  ],
    instructorBio : [
      {
        imgInstractor : "/images/Frame.png",
        titleInstractor : "ThimPress",
        subTitleInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        studentsInstractor : "156 Students",
        lessonsInstractor : "20 Lessons",
        descriptionInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        social : "Follow: "
      }
    ],
    faqs: [
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." }
    ],
      titlereviews : "comments",
    Ratingreview: {
    averageRating: "4.0",
    ratingLabel: "based on 146,951 ratings"
  },
  
  starsDistribution: [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ],
  
  comments: [
    {
      id: "1",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "2",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "3",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "4",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "5",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "6",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "7",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    
    {
      id: "8",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "9",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
  ]
  },
  {
    id: "10",
    category: "Science",
    title: "Chemistry Explained",
    firstInstructor: "by ",
    instructor: "Determined-Poitras",
    duration: "4 Weeks",
    students: "180 students",
    price: "$45.0",
    subPrice: "Free",
    image: "/images/eduma.png",
    btnContent: "View more",
    overView: [{ overviewText: "Elements and reactions basics.", lastOverviewText: "Understand molecular interactions." }],
    titleSection: "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
    curriculum: [
    {
      titleBar: "Lessons with video content",
      lessoncount: "5 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "3 Lessons",
      mins: "50 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "4 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    }
  ],
    instructorBio : [
      {
        imgInstractor : "/images/Frame.png",
        titleInstractor : "ThimPress",
        subTitleInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        studentsInstractor : "156 Students",
        lessonsInstractor : "20 Lessons",
        descriptionInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        social : "Follow: "
      }
    ],
    faqs: [
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." }
    ],
      titlereviews : "comments",
    Ratingreview: {
    averageRating: "4.0",
    ratingLabel: "based on 146,951 ratings"
  },
  
  starsDistribution: [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ],
  
  comments: [
    {
      id: "1",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "2",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "3",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "4",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "5",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "6",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "7",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    
    {
      id: "8",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "9",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
  ]
  },
  {
    id: "11",
    category: "Photography",
    title: "Landscape Shooting",
    firstInstructor: "by ",
    instructor: "Determined-Poitras",
    duration: "1 Week",
    students: "110 students",
    price: "$15.0",
    subPrice: "Free",
    image: "/images/eduma.png",
    btnContent: "View more",
    overView: [{ overviewText: "Capture stunning vistas.", lastOverviewText: "Master exposure for landscapes." }],
    titleSection: "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
    curriculum: [
    {
      titleBar: "Lessons with video content",
      lessoncount: "5 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "3 Lessons",
      mins: "50 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "4 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    }
  ],
    instructorBio : [
      {
        imgInstractor : "/images/Frame.png",
        titleInstractor : "ThimPress",
        subTitleInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        studentsInstractor : "156 Students",
        lessonsInstractor : "20 Lessons",
        descriptionInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        social : "Follow: "
      }
    ],
    faqs: [
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." }
    ],
      titlereviews : "comments",
    Ratingreview: {
    averageRating: "4.0",
    ratingLabel: "based on 146,951 ratings"
  },
  
  starsDistribution: [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ],
  
  comments: [
    {
      id: "1",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "2",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "3",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "4",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "5",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "6",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "7",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    
    {
      id: "8",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "9",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
  ]
  },
  {
    id: "12",
    category: "Development",
    title: "Node JS Basics",
    firstInstructor: "by ",
    instructor: "Determined-Poitras",
    duration: "5 Weeks",
    students: "320 students",
    price: "$80.0",
    subPrice: "Free",
    image: "/images/eduma.png",
    btnContent: "View more",
    overView: [{ overviewText: "Backend logic with Node.", lastOverviewText: "Build scalable server APIs." }],
    titleSection: "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
    curriculum: [
    {
      titleBar: "Lessons with video content",
      lessoncount: "5 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "3 Lessons",
      mins: "50 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "4 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    }
  ],
    instructorBio : [
      {
        imgInstractor : "/images/Frame.png",
        titleInstractor : "ThimPress",
        subTitleInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        studentsInstractor : "156 Students",
        lessonsInstractor : "20 Lessons",
        descriptionInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        social : "Follow: "
      }
    ],
    faqs: [
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." }
    ],
      titlereviews : "comments",
    Ratingreview: {
    averageRating: "4.0",
    ratingLabel: "based on 146,951 ratings"
  },
  
  starsDistribution: [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ],
  
  comments: [
    {
      id: "1",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "2",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "3",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "4",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "5",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "6",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "7",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    
    {
      id: "8",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "9",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
  ]
  },
  {
    id: "13",
    category: "Design",
    title: "Typography Art",
    firstInstructor: "by ",
    instructor: "Determined-Poitras",
    duration: "2 Weeks",
    students: "130 students",
    price: "$29.0",
    subPrice: "Free",
    image: "/images/eduma.png",
    btnContent: "View more",
    overView: [{ overviewText: "The art of typefaces.", lastOverviewText: "Modern layout and hierarchy." }],
    titleSection: "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
    curriculum: [
    {
      titleBar: "Lessons with video content",
      lessoncount: "5 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "3 Lessons",
      mins: "50 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "4 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    }
  ],
    instructorBio : [
      {
        imgInstractor : "/images/Frame.png",
        titleInstractor : "ThimPress",
        subTitleInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        studentsInstractor : "156 Students",
        lessonsInstractor : "20 Lessons",
        descriptionInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        social : "Follow: "
      }
    ],
    faqs: [
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." }
    ],
      titlereviews : "comments",
    Ratingreview: {
    averageRating: "4.0",
    ratingLabel: "based on 146,951 ratings"
  },
  
  starsDistribution: [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ],
  
  comments: [
    {
      id: "1",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "2",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "3",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "4",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "5",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "6",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "7",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    
    {
      id: "8",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "9",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
  ]
  },
  {
    id: "14",
    category: "Writing",
    title: "Blogging Secrets",
    firstInstructor: "by ",
    instructor: "Determined-Poitras",
    duration: "1 Week",
    students: "250 students",
    price: "$10.0",
    subPrice: "Free",
    image: "/images/eduma.png",
    btnContent: "View more",
    overView: [{ overviewText: "Successful blog strategies.", lastOverviewText: "Content and engagement tips." }],
    titleSection: "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
    curriculum: [
    {
      titleBar: "Lessons with video content",
      lessoncount: "5 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "3 Lessons",
      mins: "50 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "4 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    }
  ],
    instructorBio : [
      {
        imgInstractor : "/images/Frame.png",
        titleInstractor : "ThimPress",
        subTitleInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        studentsInstractor : "156 Students",
        lessonsInstractor : "20 Lessons",
        descriptionInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        social : "Follow: "
      }
    ],
    faqs: [
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." }
    ],
      titlereviews : "comments",
    Ratingreview: {
    averageRating: "4.0",
    ratingLabel: "based on 146,951 ratings"
  },
  
  starsDistribution: [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ],
  
  comments: [
    {
      id: "1",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "2",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "3",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "4",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "5",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "6",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "7",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    
    {
      id: "8",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "9",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
  ]
  },
  {
    id: "15",
    category: "Science",
    title: "Biology Basics",
    firstInstructor: "by ",
    instructor: "Determined-Poitras",
    duration: "3 Weeks",
    students: "200 students",
    price: "$30.0",
    subPrice: "Free",
    image: "/images/eduma.png",
    btnContent: "View more",
    overView: [{ overviewText: "Introduction to living cells.", lastOverviewText: "Understanding biological life." }],
    titleSection: "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
    curriculum: [
    {
      titleBar: "Lessons with video content",
      lessoncount: "5 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "3 Lessons",
      mins: "50 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "4 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    }
  ],
    instructorBio : [
      {
        imgInstractor : "/images/Frame.png",
        titleInstractor : "ThimPress",
        subTitleInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        studentsInstractor : "156 Students",
        lessonsInstractor : "20 Lessons",
        descriptionInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        social : "Follow: "
      }
    ],
    faqs: [
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." }
    ],
      titlereviews : "comments",
    Ratingreview: {
    averageRating: "4.0",
    ratingLabel: "based on 146,951 ratings"
  },
  
  starsDistribution: [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ],
  
  comments: [
    {
      id: "1",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "2",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "3",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "4",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "5",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "6",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "7",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    
    {
      id: "8",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "9",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
  ]
  },
  {
    id: "16",
    category: "Photography",
    title: "Night Photography",
    firstInstructor: "by ",
    instructor: "Determined-Poitras",
    duration: "2 Weeks",
    students: "90 students",
    price: "$22.0",
    subPrice: "Free",
    image: "/images/eduma.png",
    btnContent: "View more",
    overView: [{ overviewText: "Low light shooting secrets.", lastOverviewText: "Capture the city at night." }],
    titleSection: "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
    curriculum: [
    {
      titleBar: "Lessons with video content",
      lessoncount: "5 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "3 Lessons",
      mins: "50 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "4 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    }
  ],
    instructorBio : [
      {
        imgInstractor : "/images/Frame.png",
        titleInstractor : "ThimPress",
        subTitleInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        studentsInstractor : "156 Students",
        lessonsInstractor : "20 Lessons",
        descriptionInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        social : "Follow: "
      }
    ],
    faqs: [
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." }
    ],
      titlereviews : "comments",
    Ratingreview: {
    averageRating: "4.0",
    ratingLabel: "based on 146,951 ratings"
  },
  
  starsDistribution: [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ],
  
  comments: [
    {
      id: "1",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "2",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "3",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "4",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "5",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "6",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "7",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    
    {
      id: "8",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "9",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
  ]
  },
  {
    id: "17",
    category: "Development",
    title: "Full Stack Basics",
    firstInstructor: "by ",
    instructor: "Determined-Poitras",
    duration: "8 Weeks",
    students: "600 students",
    price: "$150.0",
    subPrice: "Free",
    image: "/images/eduma.png",
    btnContent: "View more",
    overView: [{ overviewText: "Connect frontend and backend.", lastOverviewText: "Full stack deployment guide." }],
    titleSection: "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
    curriculum: [
    {
      titleBar: "Lessons with video content",
      lessoncount: "5 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "3 Lessons",
      mins: "50 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "4 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    }
  ],
    instructorBio : [
      {
        imgInstractor : "/images/Frame.png",
        titleInstractor : "ThimPress",
        subTitleInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        studentsInstractor : "156 Students",
        lessonsInstractor : "20 Lessons",
        descriptionInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        social : "Follow: "
      }
    ],
    faqs: [
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." }
    ],
      titlereviews : "comments",
    Ratingreview: {
    averageRating: "4.0",
    ratingLabel: "based on 146,951 ratings"
  },
  
  starsDistribution: [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ],
  
  comments: [
    {
      id: "1",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "2",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "3",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "4",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "5",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "6",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "7",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    
    {
      id: "8",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "9",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
  ]
  },
  {
    id: "18",
    category: "Design",
    title: "Figma for Beginners",
    firstInstructor: "by ",
    instructor: "Determined-Poitras",
    duration: "3 Weeks",
    students: "400 students",
    price: "$40.0",
    subPrice: "Free",
    image: "/images/eduma.png",
    btnContent: "View more",
    overView: [{ overviewText: "Basics of Figma interface.", lastOverviewText: "Prototypes and design handoff." }],
    titleSection: "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
    curriculum: [
    {
      titleBar: "Lessons with video content",
      lessoncount: "5 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "3 Lessons",
      mins: "50 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "4 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    }
  ],
    instructorBio : [
      {
        imgInstractor : "/images/Frame.png",
        titleInstractor : "ThimPress",
        subTitleInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        studentsInstractor : "156 Students",
        lessonsInstractor : "20 Lessons",
        descriptionInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        social : "Follow: "
      }
    ],
    faqs: [
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." }
    ],
      titlereviews : "comments",
    Ratingreview: {
    averageRating: "4.0",
    ratingLabel: "based on 146,951 ratings"
  },
  
  starsDistribution: [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ],
  
  comments: [
    {
      id: "1",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "2",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "3",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "4",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "5",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "6",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "7",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    
    {
      id: "8",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "9",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
  ]
  },
  {
    id: "19",
    category: "Writing",
    title: "Script Writing",
    firstInstructor: "by ",
    instructor: "Determined-Poitras",
    duration: "4 Weeks",
    students: "70 students",
    price: "$50.0",
    subPrice: "Free",
    image: "/images/eduma.png",
    btnContent: "View more",
    overView: [{ overviewText: "Story structure for films.", lastOverviewText: "Writing your first script." }],
    titleSection: "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
    curriculum: [
    {
      titleBar: "Lessons with video content",
      lessoncount: "5 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "3 Lessons",
      mins: "50 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "4 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    }
  ],
    instructorBio : [
      {
        imgInstractor : "/images/Frame.png",
        titleInstractor : "ThimPress",
        subTitleInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        studentsInstractor : "156 Students",
        lessonsInstractor : "20 Lessons",
        descriptionInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        social : "Follow: "
      }
    ],
    faqs: [
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." }
    ],
      titlereviews : "comments",
    Ratingreview: {
    averageRating: "4.0",
    ratingLabel: "based on 146,951 ratings"
  },
  
  starsDistribution: [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ],
  
  comments: [
    {
      id: "1",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "2",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "3",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "4",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "5",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "6",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "7",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    
    {
      id: "8",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "9",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
  ]
  },
  {
    id: "20",
    category: "Science",
    title: "Environmental Science",
    firstInstructor: "by ",
    instructor: "Determined-Poitras",
    duration: "3 Weeks",
    students: "150 students",
    price: "$25.0",
    subPrice: "Free",
    image: "/images/eduma.png",
    btnContent: "View more",
    overView: [{ overviewText: "Ecology and sustainability.", lastOverviewText: "Understanding climate issues." }],
    titleSection: "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
    curriculum: [
    {
      titleBar: "Lessons with video content",
      lessoncount: "5 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "3 Lessons",
      mins: "50 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    },
    {
      titleBar: "Lessons with video content",
      lessoncount: "4 Lessons",
      mins: "45 mins",
      lessonss: [ // تأكد أن هذه المصفوفة موجودة داخل كل عنصر في curriculum
      { title: "Lessons with video content", duration: "12:30", isLocked: false },
      { title: "Lessons with video content", duration: "10:05", isLocked: false },
      { title: "Lessons with video content", duration: "2:25", isLocked: true },
    ]
    }
  ],
    instructorBio : [
      {
        imgInstractor : "/images/Frame.png",
        titleInstractor : "ThimPress",
        subTitleInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        studentsInstractor : "156 Students",
        lessonsInstractor : "20 Lessons",
        descriptionInstractor : "LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.",
        social : "Follow: "
      }
    ],
    faqs: [
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." },
      { title: "What Does Royalty Free Mean?", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis faucibus odio arcu duis dui, adipiscing facilisis. Urna, donec turpis egestas volutpat. Quisque nec non amet quis. Varius tellus justo odio parturient mauris curabitur lorem in." }
    ],
      titlereviews : "comments",
    Ratingreview: {
    averageRating: "4.0",
    ratingLabel: "based on 146,951 ratings"
  },
  
  starsDistribution: [
    { stars: 5, percentage: 90 },
    { stars: 4, percentage: 5 },
    { stars: 3, percentage: 2 },
    { stars: 2, percentage: 2 },
    { stars: 1, percentage: 1 }
  ],
  
  comments: [
    {
      id: "1",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "2",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "3",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "4",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "5",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "6",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "7",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    
    {
      id: "8",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
    {
      id: "9",
      userAvatar: "/images/userComment.png",
      userName: "Laura Hipster",
      date: "October 03, 2022",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis obcaecati quasi corrupti vel cum molestiae, distinctio omnis dicta vero iure itaque? Reprehenderit quae mollitia cupiditate esse, impedit fuga pariatur dignissimos corporis maiores, tenetur consequuntur! Assumenda fuga doloribus itaque, quos sequi eveniet adipisci ipsa obcaecati, ab, atque officiis. Deleniti perspiciatis nemo ratione nihil quidem, recusandae eveniet consequatur totam eius aut quasi cumque tempore assumenda tenetur laborum omnis ea est quibusdam!"
    },
  ]
  },
];