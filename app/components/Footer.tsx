import { services,quiklinks } from "../resources/footer";
import Link from "next/link";
import { Phone,MapPin,Mail} from "lucide-react";
const Footer=()=>{
    return(
        <footer className="bg-primary">
        <div className=" flex justify-around py-10">
            
        <div className="flex flex-col gap-5 w-1/4 ">
        <span className="subHeading text-secondary font-bold">EcoHome Uk</span>
        <p className="normalText text-secondary">Your trusted partner for a greener,more 
            energy-efficient home in the UK.Certified
            installers of renewable energy solutions
        </p>
        <div className="flex gap-5 text-secondary normalText font-bold">
            <span>FB</span>
            <span>IN</span>
            <span>TW</span>
        </div>
        </div>
        <div className="flex flex-col gap-5">
        <span className="subHeading text-secondary font-bold">Services</span>
        <ul className="flex flex-col gap-2">
        {
            services.map((value,i)=>(
               <li key={`${value} ${i}`} className="text-secondary normalText">
                   <Link href={value.link}>
                       {value.name}
                   </Link>
               </li>

            ))}
            </ul>
            </div>
           <div className="flex flex-col gap-5">
        <span className="subHeading text-secondary font-bold">Quick Links</span>
        <ul className="flex flex-col gap-2">
        {
            quiklinks.map((value,i)=>(
               <li key={`${value} ${i}`} className="text-secondary normalText">
                   <Link href={value.link}>
                       {value.name}
                   </Link>
               </li>

            ))}
            </ul>
            </div>
            <div className="flex flex-col gap-5">
             <span className="subHeading text-secondary font-bold">Contact</span>
             <div className="flex gap-3 items-center text-secondary"><MapPin /><span className="normalText text-secondary">123 Green Street,London,uk</span></div>
             <div className="flex gap-3 items-center text-secondary"><Phone /><span className="normalText text-secondary">+44 1234 567890</span></div>
             <div className="flex gap-3 items-center text-secondary"><Mail /><span className="normalText text-secondary">hello@ecohomeuk.co.uk</span></div>
            </div>
            </div>
            <hr className="text-secondary"/>
            <div className="text-center py-5 text-secondary font-bold normalText">@2025 EcoHome UK, All right reserved | Privacy Policy</div>
            
        </footer>
    )
}
export default Footer;