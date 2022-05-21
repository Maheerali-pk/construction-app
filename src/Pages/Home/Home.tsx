import { icons } from "../../utils/icons";
import OverviewCard, { OverviewCardProps } from "./OverviewCard";
import backgroundImage1 from "../../assets/home/Vector 1-2.png";
import backgroundImage2 from "../../assets/home/Vector 1.png";
import backgroundImage3 from "../../assets/home/Vector 1-1.png";
import ProjectCard, { ProjectCardProps } from "./ProjectCard";
import InvoiceCard, { InvoiceCardProps } from "./InvoiceCard";

interface HomeProps {}
const overviewCards: OverviewCardProps[] = [
   {
      color: "rgba(122, 159, 255, 1)",
      description: "Currently, the projects is in progress.",
      value: 56,
      title: "Live projects",
      icon: icons.overviewCard.live,
      image: backgroundImage1,
      showViewAll: true,
      shadowColor: "rgba(2, 140, 213, 0.15)",
   },
   {
      color: "rgba(122, 209, 255, 1)",
      description: "Projects in progress",
      value: 124,
      title: "In Progress",
      icon: icons.overviewCard.isProgress,
      image: backgroundImage2,
      shadowColor: "rgba(101, 202, 255, 0.2)",
   },
   {
      color: "rgba(185, 122, 255, 1)",
      description: "Currently, the projects is in progress.",
      value: 24,
      title: "Completed projects",
      icon: icons.overviewCard.completed,
      image: backgroundImage3,
      shadowColor: "rgba(173, 101, 255, 0.3)",
   },
];

const projectCards: ProjectCardProps[] = [
   {
      deadline: "25 may",
      title: "Construction Project",
      subtitle: "Property name",
      minPrice: 100,
      maxPrice: 800,
      progress: 75,
      vendorName: "Vendor's name",
      img: "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
   },
   {
      deadline: "25 may",
      title: "Construction Project",
      subtitle: "Property name",
      minPrice: 100,
      maxPrice: 800,
      progress: 75,
      vendorName: "Vendor's name",
      img: "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
   },
   {
      deadline: "25 may",
      title: "Construction Project",
      subtitle: "Property name",
      minPrice: 100,
      maxPrice: 800,
      progress: 75,
      vendorName: "Vendor's name",
      img: "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
   },
];

const invoiceCards: InvoiceCardProps[] = [
   {
      amount: 137,
      status: "approved",
      userName: "Erin Gonzales",
      invoiceNo: "5331",
      date: "25 May",
      img: "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
   },
   {
      amount: 137,
      status: "approved",
      userName: "Erin Gonzales",
      invoiceNo: "5331",
      date: "25 May",
      img: "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
   },
   {
      amount: 137,
      status: "approved",
      userName: "Erin Gonzales",
      invoiceNo: "5331",
      date: "25 May",
      img: "https://i.pinimg.com/564x/f7/6b/91/f76b91f22019b550e0848519719a03f1.jpg",
   },
];
const Home: React.FC<HomeProps> = () => {
   return (
      <div className="flex flex-col overflow-auto">
         <div className="flex  w-100 items-center" style={{ minHeight: "8.5rem" }}>
            <div className="mx-15 rounded-md flex pl-8 items-center py-6 gap-7 bg-gray-400 w-full">
               {icons.search}
               <input
                  className="h-full w-full bg-transparent text-gray-200 text-base border-none outline-none"
                  placeholder="Search for projects"
               ></input>
            </div>
         </div>
         <div className="d-flex flex-col px-15 pt-11">
            <div className="text-28 font-medium mb-4">Welcome back, Andrew!</div>
            <div className="text-lg text-gray-600 mb-6">Have a look at the Quick Progress Bar.</div>
            <div className="grid gap-4 grid-cols-[1.3fr_1fr_1fr] mb-10">
               {overviewCards.map((x) => (
                  <OverviewCard {...x}></OverviewCard>
               ))}{" "}
               s
            </div>
            <div className="text-28 text-gray-800 font-medium mb-4">Current Projects</div>
            <div className="text-lg text-gray-600 mb-6">Projects that are currently in progress</div>
            <div className="grid grid-cols-2 gap-2.5 2xl:grid-cols-3 mb-10">
               {projectCards.map((x) => (
                  <ProjectCard {...x}></ProjectCard>
               ))}
            </div>

            <div className="text-28 text-gray-800 font-medium mb-4">Pending Invoice</div>
            <div className="text-lg text-gray-600 mb-6">Invoices that are currently pending</div>
            <div className="grid grid-cols-2 gap-2.5 2xl:grid-cols-3 mb-10">
               {invoiceCards.map((x) => (
                  <InvoiceCard {...x}></InvoiceCard>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Home;
