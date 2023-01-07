import React from 'react';
import { MdEventAvailable, MdOutlineVideoLibrary } from 'react-icons/md';
import { FiCreditCard } from 'react-icons/fi';
import { BsCurrencyDollar, BsShield } from 'react-icons/bs';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';
import avatar2 from './avatar2.jpg';
import avatar3 from './avatar3.png';
import product3 from './product3.jpg';
import product4 from './product4.jpg';

const customerGridImage = (props) => (
  <div className="image flex gap-4">
    <img
      className="rounded-full w-10 h-10"
      src={props.CustomerImage}
      alt="student"
    />
    <div>
      <p>{props.CustomerName}</p>
      <p>{props.CustomerEmail}</p>
    </div>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
    <p>{props.Status}</p>
  </div>
);

export const customersGrid = [
  { type: 'checkbox', width: '50' },
  { headerText: 'Name',
    width: '150',
    template: customerGridImage,
    textAlign: 'Center' },
  { field: 'ProjectName',
    headerText: 'Project Name',
    width: '150',
    textAlign: 'Center' },
  { field: 'Status',
    headerText: 'Status',
    width: '130',
    format: 'yMd',
    textAlign: 'Center',
    template: customerGridStatus },
  {
    field: 'Weeks',
    headerText: 'Weeks',
    width: '100',
    format: 'C2',
    textAlign: 'Center' },
  { field: 'Budget',
    headerText: 'Budget',
    width: '100',
    format: 'yMd',
    textAlign: 'Center' },

  { field: 'Location',
    headerText: 'Location',
    width: '150',
    textAlign: 'Center' },

  { field: 'CustomerID',
    headerText: 'Customer ID',
    width: '120',
    textAlign: 'Center',
    isPrimaryKey: true,
  },

];

export const studentsGrid = [
  { field: 'studentID',
    headerText: 'student ID',
    width: '125',
    textAlign: 'Center' },
  { field: 'Batch',
    headerText: 'Batch',
    width: '125',
    textAlign: 'Center' },
  { field: 'Name',
    headerText: 'Student Name',
    width: '230',
    textAlign: 'Center',
  },
  { field: 'fatherName',
    headerText: 'Father Name',
    width: '200',
    textAlign: 'Center',
  },
  { field: 'Mobile',
    headerText: 'Mobile Number',
    width: '120',
    textAlign: 'Center',
  },
  { field: 'Email',
    headerText: 'Email',
    width: '170',
    textAlign: 'Center' },
];

export const links = [
  // {
  //   title: 'Dashboard',
  //   links: [
  //     {
  //       name: 'ecommerce',
  //       icon: <FiShoppingBag />,
  //     },
  //   ],
  // },

  {
    title: 'Dashboard',
    links: [
      {
        name: 'Events',
        icon: <MdEventAvailable />,
      },
      {
        name: 'Courses',
        icon: <MdOutlineVideoLibrary />,
      },
      {
        name: 'students',
        icon: <IoMdContacts />,
      },
      {
        name: 'customers',
        icon: <RiContactsLine />,
      },
    ],
  },
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];

export const EventsGrid = [
  { type: 'checkbox', width: '50' },
  {
    field: 'image',
    headerText: 'Image',
    textAlign: 'Center',
    width: '120',
  },
  { field: 'title',
    headerText: 'Title',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'Description',
    headerText: 'Description',
    textAlign: 'Left',
    width: '350',
  },
  {
    field: 'event_id',
    headerText: 'Event ID',
    width: '120',
    textAlign: 'Center',
    isPrimaryKey: true,
  },

  {
    field: 'driveLink',
    headerText: 'Link',
    width: '150',
    textAlign: 'Left',
  },
];

export const CoursesGrid = [
  { type: 'checkbox', width: '50' },
  {
    field: 'image',
    headerText: 'Image',
    textAlign: 'Center',
    width: '120',
  },
  { field: 'title',
    headerText: 'Course Title',
    width: '150',
    textAlign: 'Center',
  },
  {
    field: 'Description',
    headerText: 'Description',
    format: 'C2',
    textAlign: 'Left',
    width: '350',
  },
  {
    field: 'course_id',
    headerText: 'Course ID',
    width: '120',
    textAlign: 'Center',
    isPrimaryKey: true,
  },

  {
    field: 'driveLink',
    headerText: 'Link',
    width: '150',
    textAlign: 'Left',
  },
];

export const customersData = [
  {
    CustomerID: 1001,
    CustomerName: 'Nirav Joshi',
    CustomerEmail: 'nirav@gmail.com',
    CustomerImage:
      avatar2,
    ProjectName: 'Hosting Press HTML',
    Status: 'Active',
    StatusBg: '#8BE78B',
    Weeks: '40',
    Budget: '$2.4k',
    Location: 'India',
  },
  {
    CustomerID: 1002,

    CustomerName: 'Sunil Joshi',
    CustomerEmail: 'sunil@gmail.com',
    ProjectName: 'Elite Admin',
    Status: 'Active',
    CustomerImage:
      avatar3,

    StatusBg: '#8BE78B',
    Weeks: '11',
    Budget: '$3.9k',
    Location: 'India',
  },

];

export const studentsData = [
  {
    studentID: '21J41A6284',
    Batch: '2021-2025',
    Name: 'Gunda Sai Vignesh',
    fatherName: 'G Thirupathi',
    Mobile: 8639597030,
    Email: 'bunnygunda04@gmail.com',
  },
  {
    studentID: '21J41A6290',
    Batch: '2021-2025',
    Name: 'Jupally Rakesh',
    fatherName: 'J Swami',
    Mobile: 6303221243,
    Email: 'rakeshjupally@gmail.com',
  },
  {
    studentID: '21J41A62E7',
    Batch: '2021-2025',
    Name: 'Eega Saketh Reddy',
    fatherName: 'Eega',
    Mobile: 9014906854,
    Email: 'bunnygunda04@gmail.com',
  },
  {
    studentID: '21J41A62F1',
    Batch: '2021-2025',
    Name: 'Gantala Avinash',
    fatherName: 'G Seetha Ramulu',
    Mobile: 9515953713,
    Email: 'gantalaavinash@gmail.com',
  },
  {
    studentID: '20J41A6284',
    Batch: '2020-2024',
    Name: 'Gunda Sai Vignesh',
    fatherName: 'G Thirupathi',
    Mobile: 9515953713,
    Email: 'bunnygunda04@gmail.com',
  },
  {
    studentID: '20J41A62E4',
    Batch: '2020-2024',
    Name: 'CH Najaraju',
    fatherName: 'CH Thirupathi',
    Mobile: 9912435185,
    Email: 'chnagaraju143@gmail.com',
  },
];

export const EventsData = [
  {
    EventID: 944895,
    CustomerName: 'Lulia albu',
    TotalAmount: 17.99,
    EventItems: 'Skincare',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      product3,
  },
  {
    EventID: 845954,
    CustomerName: 'Penjani',
    TotalAmount: 59.99,
    EventItems: 'Headphone',
    Location: 'USA',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      product4,
  },
  {
    EventID: 845954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    EventItems: 'Shoes',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    EventID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    EventItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    EventID: 38489,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    EventItems: 'Ice Cream',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    EventID: 24546,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    EventItems: 'Pan Cake',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    EventID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    EventItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    EventID: 845954,
    CustomerName: 'Jie Yan',
    TotalAmount: 87.99,
    EventItems: 'Shoes',
    Location: 'USA',
    Status: 'pending',
    StatusBg: '#FB9678',
    ProductImage:
      'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
  },
  {
    EventID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    EventItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
  {
    EventID: 38489,
    CustomerName: 'Miron',
    TotalAmount: 87.99,
    EventItems: 'Ice Cream',
    Location: 'USA',
    Status: 'active',
    StatusBg: '#03C9D7',
    ProductImage:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
  },
  {
    EventID: 24546,
    CustomerName: 'Frank',
    TotalAmount: 84.99,
    EventItems: 'Pan Cake',
    Location: 'Delhi',
    Status: 'complete',
    StatusBg: '#8BE78B',
    ProductImage:
      'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    EventID: 874534,
    CustomerName: 'Danai',
    TotalAmount: 122.99,
    EventItems: 'Watch',
    Location: 'USA',
    Status: 'canceled',
    StatusBg: '#FF5C8E',
    ProductImage:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
  },
];

export const dropdownData = [
  {
    Id: '1',
    Time: 'March 2021',
  },
  {
    Id: '2',
    Time: 'April 2021',
  }, {
    Id: '3',
    Time: 'May 2021',
  },
];

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];

