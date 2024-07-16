<script lang="typescript">
    import NavBar from "../../components/NavBar.svelte";
    import Footer from "../../components/Footer.svelte";
    import Coaches from "../../components/Coaches.svelte";
    import Socials from "../../components/socials.svelte";
    </script>
   <div class="bg-black">
    <div class="relative flex flex-col max-w-[1920px] min-h-screen mx-auto border-x-2 border-darkgrey"> 
    <NavBar/>
    <div class = "flex flex-col w-full justify-center items-center bg-black pb-[50px] px-[50px]">
        <div class="text-white text-center text-5xl font-dancing pt-[20px] border-b-4 pb-[10px] border-lightgrey w-full "> Coaches </div>
        <div class="mx-[50px]">
            <div class="text-white mx-[300px] pt-[20px] text-3xl">The success of Devils Baseball hinges significantly on our coaches, all of whom possess extensive playing and coaching backgrounds that highly qualify them for affiliation with our program. </div>
            <Socials/>
        </div>
        <div class ="grid grid-rows-3 grid-cols-2">
            <Coaches name="Jay Sanford" coachingpositon="Director/18U Head Coach" experience="Jay Sanford leads as both the director and head coach of our 18U program. A retired US Marine Corps Veteran with years of service to our country, Sanford has accumulated over 200 wins during his coaching career with the Devils. His leadership propelled an 18U team to national rankings in 2021. Sanford also serves as a Varsity Assistant Coach for Cranston High School East." img="coaches/Jay.jpg"/>
            <Coaches name="Paul Rodman" coachingpositon="18U Assistant Coach" experience="Paul Rodman is embarking on his third year with the Devils program. A former player at Becker College, Rodman brings coaching experience from diverse levels of competition. He plays a pivotal role in player development and oversees the organization of the Devils' winter training program. " img="coaches/Paul.jpg"/>
            <Coaches name="Sean Howe" coachingpositon="18U Assistant Coach/16U Head Coach" experience="Sean Howe comes aboard the Devils program as our new 16U Head Coach. A former collegiate athlete, Howe played four years of Division 3 football at Bridgewater State University and possesses firsthand knowledge of the recruiting process. Currently, he holds the positions of Junior Varsity Head Coach and Varsity Assistant Coach at Cranston High School East." img="coaches/Sean.jpg"/>
            <Coaches name="Joe Coelho" coachingpositon="Recruiting Coordinator" experience="Joe Coelho is entering his fourth year in the Devils program. Over his tenure, Coelho has undertaken various roles and responsibilities. He has been instrumental in the recruitment process for all Devils athletes since the class of 2022. In 2024, Coelho assumed complete responsibility for recruiting and successfully assembled the largest recruiting class in program history." img="coaches/Joe.jpg"/>
            <Coaches name="Chris Genao" coachingpositon="16U/18U Assistant Coach" experience="Chris Genao marks his fifth year in the Devils Program. A former outfielder for UConn Avery Point and Classical High School, Genao played a pivotal role in guiding his team to the RIIL Division 3 championship in 2017. Currently, he contributes as an Assistant Coach for both our 16U and 18U programs." img="logo/DevilLogo.png"/>
            <Coaches name="Ryan Pallotta" coachingpositon="13U Head Coach" experience="Ryan Pallotta comes aboard the Devils program as our new 13U Head Coach. A former member of the program who continued his playing career at Rhode Island College, Pallotta brings valuable experience to the role. He has actively participated in youth programs at North Providence Little League, currently serving as the Head Coach for the 10-11U All Stars team." img="coaches/Ryan.jpg"/>
        </div>
    </div>
    <Footer/>
    </div>
    </div>