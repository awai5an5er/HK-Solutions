import { team } from "@/app/resources/about"

const Team=()=>{
    return(
        <section className="py-10 w-[95%] mx-auto flex flex-col gap-15">
            <div className="flex flex-col  items-center gap-5">
            <h1 className="text-primary heading font-bold">Meet Our Team</h1>
            <p className="text-txtColor normalText max-w-2xl text-center mx-auto">
  A passionate team of experts dedicated to delivering innovative and sustainable energy solutions for every home and business
</p>
            
            </div>
            <div className="flex justify-around flex-wrap gap-15">
            {
            team.map((value,i)=>(
                
            
            <div key={`${value} ${i}`} className="flex flex-col gap-2 items-center">
            <img src={value.image} alt="Error" className="rounded-full size-20" />
            <span className="subHeading text-primary font-bold">{value.name}</span>
            <span className="normalText italic text-txtColor">{value.role}</span>
            </div>
            )

            )
            }
            </div>
        </section>
    )
}
export default Team