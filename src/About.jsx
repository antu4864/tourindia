import React from "react";
import Flag_of_India from "./image/Flag_of_India.jpg";
import geo_img from "./image/geo_img.jpg";
import culture from "./image/culture.jpg";

const About =()=>{
    return(

<>
<div className="container-fluid ">
 
        <div className="col-12 mx-auto">
            <div className="row">
            <h4 className="about_h4">Overview</h4>
                <div className="col-lg-4 col-md-6  col-12 ">
                  <p> <a href="https://www.istockphoto.com/photos/indian-flag"><img src={Flag_of_India} alt="Flag of india" className="img-fluid" /></a> </p>
                </div>
                <div className="col-lg-8 col-md-6 ms-12 col-12  ">
                
                <p className="about_p">India, country that occupies the greater part of South Asia. Its capital is New Delhi, built in the 20th century just south of the historic hub of Old Delhi to serve as India’s administrative centre. Its government is a constitutional republic that represents a highly diverse population consisting of thousands of ethnic groups and likely hundreds of languages. With roughly one-sixth of the world’s total population, India is the second most populous country, after China.<br/><br/>
                
                It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE. From that period on, India functioned as a virtually self-contained political and cultural arena, which gave rise to a distinctive tradition that was associated primarily with Hinduism, the roots of which can largely be traced to the Indus civilization. Other religions, notably Buddhism and Jainism, originated in India—though their presence there is now quite small—and throughout the centuries residents of the subcontinent developed a rich intellectual life in such fields as mathematics, astronomy, architecture, literature, music, and the fine arts.
                <a className="about_a" href="https://en.wikipedia.org/wiki/India">Read More</a>
                </p>
                </div>
                </div>
<br/>

                <div className="row">
                <h4 className="about_h4">Geography of India</h4>
                <div className="col-lg-4 col-md-6  col-12 ">
                  <p> <a href="https://www.shutterstock.com/search/indian+geography"><img src={geo_img} alt="geo of img" className="img-fluid" /></a> </p>
                </div>
                <div className="col-lg-8 col-md-6 ms-12 col-12  ">
                   
                    <p className="about_p">India is situated north of the equator between 8°4' north to 37°6' north latitude and 68°7' east to 97°25' east longitude.It is the seventh-largest country in the world, with a total area of 3,287,263 square kilometres (1,269,219 sq mi).India measures 3,214 km (1,997 mi) from north to south and 2,933 km (1,822 mi) from east to west. It has a land frontier of 15,200 km (9,445 mi) and a coastline of 7,516.6 km (4,671 mi).<br/><br/>

On the south, India projects into and is bounded by the Indian Ocean—in particular, by the Arabian Sea on the west, the Lakshadweep Sea to the southwest, the Bay of Bengal on the east, and the Indian Ocean proper to the south. The Palk Strait and Gulf of Mannar separate India from Sri Lanka to its immediate southeast, and the Maldives are some 125 kilometres (78 mi) to the south of India's Lakshadweep Islands across the Eight Degree Channel. India's Andaman and Nicobar Islands, some 1,200 kilometres (750 mi) southeast of the mainland, share maritime borders with Myanmar, Thailand and Indonesia. Kanyakumari at 8°4′41″N and 77°55′230″E is the southernmost tip of the Indian mainland, while the southernmost point in India is Indira Point on Great Nicobar Island. The northernmost point which is under Indian administration is Indira Col, Siachen Glacier.
 India's territorial waters extend into the sea to a distance of 12 nautical miles (13.8 mi; 22.2 km) from the coast baseline.India has the 18th largest Exclusive Economic Zone of 2,305,143 km2 (890,021 sq mi).<a className="about_a" href="https://en.wikipedia.org/wiki/Geography_of_India">Read More</a></p>
                </div>
                </div>
<br/>                
                <div className="row">
                <h4 className="about_h4">Culture of India</h4>
                <div className="col-lg-4 col-md-6  col-12 ">
                  <p> <a href="https://www.shutterstock.com/search/indian+culture"><img src={culture} alt="culture" className="img-fluid" /></a> </p>
                </div>
                <div className="col-lg-8 col-md-6 ms-12 col-12  ">
                   
                    <p className="about_p">Indian culture is the heritage of social norms, ethical values, traditional customs, belief systems, political systems, artifacts and technologies that originated in or are associated with the Indian subcontinent. The term also applies beyond India to countries and cultures whose histories are strongly connected to India by immigration, colonization, or influence, particularly in South Asia and Southeast Asia. India's languages, religions, dance, music, architecture, food and customs differ from place to place within the country.<br/><br/>

Indian culture, often labelled as a combination of several cultures, has been influenced by a history that is several millennia old, beginning with the Indus Valley Civilization.[1][2] Many elements of Indian culture, such as Indian religions, mathematics, philosophy, cuisine, languages, dance, music and movies have had a profound impact across the Indosphere, Greater India and the world.
<a className="about_a" href="https://en.wikipedia.org/wiki/Culture_of_India">Read More</a></p>
                </div>
                </div>

        </div>
    
</div>



</>

    );

}
export default About;