<script lang="ts">
    import NavBar from "../components/Navbar.svelte"
    import Footer from "../components/Footer.svelte"
    import Commit from "../components/Commit.svelte"
    import CommitsCard from "../components/CommitsCard.svelte";
    import TryoutCard from "../components/TryoutCard.svelte";
    import Socials from "../components/socials.svelte";
</script>


<div class="bg-black">
    <div class="relative max-w-[1920px] min-h-screen mx-auto border-x-2 border-darkgrey"> 
        <NavBar/>
        <div class = "flex flex-col w-full justify-center items-center bg-black pb-[50px]">
            <Socials/>
            <img src="logo/MainLogo.png" alt="Devils Logo" class="w-[800px] h-[600px] mx-12 mt-20"/>
            <div class="h-[500px] font-dancing mt-[-550px] mr-[1100px] text-white font-bold lg:text-6xl opacity-100 text-4xl">Welcome to...</div>
            <a href="/about" class="cursor-pointer text-maroon text-2xl font-semibold px-16 py-4 border-2 border-solid border-amaroon rounded-lg bg-white hover:bg-lightgrey hover:text-maroon hover:border-maroon whitespace-nowrap mt-[-50px] ml-[500px]">About Us</a>
            <div class="text-white mt-20 font-dancing text-6xl">Where Hardwork Outworks Talent</div>
            
        </div>

            <div class="flex flex-col w-full justify-center items-centerplace-items-center py-5 px-[50px] bg-maroon">
                <div class=" w-full text-5xl text-white text-center border-b-4 border-lightgrey pb-[10px] font-dancing">Recent News</div>
                <div class="flex flex-row-2 py-6">
                    <img src="/PSChampions.jpeg" alt="devils news" class ="w-[700px] h-[400px] mr-[50px] ml-[50px]"/>
                    <div class="text-white mr-[50px]">
                        <div class="text-3xl border-b-2 border-lightgrey pb-[10px]">Rhode Island Devils 18u Claim 2024 Prospect Select Boston Classic Title</div>
                        <div class ="indent-8 text-xl pt-[10px] leading-relaxed">The Rhode Island Devils 18u triumphed as the 2024 Prospect Select Boston Classic Champions after a resilient journey through pool and bracket play. 
                            Starting with a 2-1 record in pool play, they entered bracket play as the 10th seed and proceeded to dominate, beginning with a commanding 9-1 victory over the New Hampshire Prospects 18u. 
                            Their momentum carried into day two as they secured wins over Tuccie Elite (5-2) in the quarter-finals and Zoned Redhawks Elite (2-0) in the semi-finals, marking a historic first for a Rhode Island team in the tournament's championship round. 
                            In the final showdown, the Devils displayed exceptional teamwork and skill, securing a convincing 7-2 win over the Phillies Scout Team 18u to claim the coveted title.</div>
                            <div class="mt-[10px] pt-[10px] text-xl border-t-2 border-lightgrey w-full grid grid-cols-2 leading-relaxed">
                                <div>Justin Odsen - 1-0, 8.0 IP, 11K, 0.875ERA</div>
                                <div>John Devine - 2-0, 10.0 IP, 14K, 0.000ERA</div>
                                <div>Andrew Nocera - .500 AVG, 4H, 3SB, 4RBI</div>
                                <div>Manuel Oliver - .350 AVG, 7H, 1HR, 3RBI</div>
                                <div>Jason Delehoy - .409 OBP, 5H, 1HR, 3RBI</div>
                                <div>Carlos Merejo - .476 OBP, 4H, 1HR, 4RBI</div>
                            </div>
                            
                        </div>
                </div>
            </div>
            <div class="flex flex-col w-full justify-center py-5 items-center bg-black px-[50px]">
                <div class="text-white text-5xl border-b-4 pb-[10px] w-full text-center border-lightgrey font-dancing">
                Class of 2024 Commits
                </div>
                <div class="grid grid-rows-4 grid-cols-3">
                    <Commit name="Carlos Merejo" school="Central Connecticut State University - (D1)" stats="2024 Stats: .314AVG, .477SLG, 1HR, 13RBI" baseballpositon="Catcher/DH" img="Players/Carlos.jpg"/>
                    <Commit name = "Robbie Natale" school="Central Connecticut State University - (D1)" stats ="2024 Stats: .279AVG, 12H, 1HR, 10RBI, 8SB" baseballpositon="C/OF" img="Players/Robbie.jpg"/>
                    <Commit name = "Anthony Mena" school="Assumption University - (D2)" stats ="2024 Stats: 3-1, 11.1IP, 3.71ERA, 15K" baseballpositon="Pitcher" img="Players/Mena.jpg"/>
                    <Commit name = "Justin Odsen" school="Southeastern Illinois College - (JUCO D1)" stats ="2024 Stats: 12.0IP, 2-0, 18K, 0.583ERA" baseballpositon="Pitcher" img="Players/Odsen.jpg"/>
                    <Commit name = "Kyler Lorenz" school="Dean College - (D3)" stats ="2024 Stats: .225AVG, 9H, 4RBI, 4SB" baseballpositon="SS" img="Players/Kyler.jpg"/>
                    <Commit name = "Jayven Alexandre" school="Rhode Island College - (D3)" stats ="2024 Stats: .224AVG, 13H, 11RBI, 6SB" baseballpositon="MIF" img="Players/Jayven.jpg"/>
                    <Commit name = "Malaquias Fernandez" school="Massachusetts Maritime Academy - (D3)" stats ="" baseballpositon="Pitcher" img="Players/Fernandez.jpg"/>
                    <Commit name = "Angell Garcia" school="Dominican University - (D2)" stats ="" baseballpositon="OF" img="Players/Angell.jpg"/>
                    <Commit name = "Jatin Patel" school="Anna Maria College - (D3)" stats ="2023 Stats: 2-1, 20.0IP, 3.85ERA, 19K" baseballpositon="Pitcher" img="Players/Jatin.jpg"/>
                    <Commit name="Josh Pedus" school="UMass Dartmouth - (D3)" stats="2023 Stats: .267AVG, 11H, 6RBI" baseballpositon="SS/3B" img="Players/Josh.jpg"/>
                    <Commit name = "Calvin Battersby" school="Rhode Island College - (D3) - (CCRI Transfer)" stats ="2024 Stats: 4-3, 39.0IP, 3.85ERA, 42K" baseballpositon="Pitcher" img="Players/calvin.jpg"/>
                    <Commit name ="Sean Gallagher" school="Rhode Island College - (D3) - (CCRI Transfer)" stats="2024 Stats: .384AVG, 2HR, 27RBI" baseballpositon="Catcher" img="Players/Sean.jpg"/>
                    
                </div>
                <div class="flex flex-row mx-[50px] mt-[100px] justify-center mb-[100px] place-items-center">
                    <CommitsCard/>
                    <div class="indent-8 text-white pl-[100px] leading-relaxed text-xl">In just five years of existence, the Devils baseball program has achieved remarkable success with a total of 29 commitments. 
                        This year stands out as their most prolific yet, with 13 players committing across various levels of collegiate baseball. 
                        These commitments include postgrad programs, JUCO at the Division 1 level, as well as NCAA Division 3, Division 2, and Division 1. 
                        Notably, one player has chosen to reclass at a postgrad school, while another will compete at the JUCO level. 
                        Additionally, nine players are preparing for competition at the Division 2 and Division 3 levels, and two players have secured spots at the Division 1 level for the upcoming spring season.</div>
                </div>
            </div>
            <div class="flex flex-col w-full justify-center items-centerplace-items-center py-5 px-[50px] bg-lightgrey">
                    <div class="text-white text-5xl border-b-4 text-center pb-[10px] border-maroon font-dancing">Looking Ahead - Fall 2024</div>
                    <div class="flex flex-row mx-[50px] justify-center mb-[50px] place-items-center mt-[20px] ">
                    <div class = "pr-[100px] text-xl leading-relaxed indent-8">We are pleased to announce our upcoming fall team tryouts for the 2024 season at Rhode Island Devils 
                        Baseball. This year, we will be offering teams for the 13u, 16u, and 18u age groups. For detailed information on costs, tournaments, and coaching staff 
                        for each team, please visit our tryouts page. If you have any questions or concerns, please feel free to contact us via email at 
                        ri.devils.baseball@gmail.com or through the contact form on our website. We aim to respond to all inquiries within 24-48 hours. 
                        We look forward to seeing you at the tryouts and assisting you in the upcoming season.
                    </div>
                    <TryoutCard/>
            </div>
            </div>
            <Footer/>
</div>
</div>


    