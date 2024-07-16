<script lang="typescript">
    import NavBar from "../../components/Navbar.svelte";
    import Footer from "../../components/Footer.svelte";
    import Carousel from "../../components/Carousel.svelte";
    import Socials from "../../components/socials.svelte";
    import CoachingCard from "../../components/CoachingCard.svelte";
</script>

<div class="bg-black">
    
    <div class="relative flex flex-col max-w-[1920px] min-h-screen mx-auto border-x-2 border-darkgrey"> 
    <NavBar/>
    <div class = "w-full justify-center items-center bg-black pb-[50px] px-[50px]">
        <div class="text-white text-center text-5xl font-dancing pt-[20px]  pb-[10px] w-full "> Our Story</div>
        <div class="grid grid-cols-2 pt-[50px]"> 
            <Socials/>
            <div class="text-white text-xl leading-relaxed indent-8">
                <div class="pb-[30px]">Devils Baseball was founded in 2019 by program director Jay Sanford, a retired US Marine Corps Veteran with a distinguished coaching career. Sanford's goal was to establish a program that not only allowed Rhode Island baseball players to compete against top teams in the Northeast but also fostered their development on and off the field. Since its inception, the Devils have garnered numerous accolades, including multiple tournament victories, national rankings, and a notable third-place ranking in the Northeast Region.</div> 
                <div>Under the guidance of the experienced coaching staff, which includes individuals like Paul Rodman, Sean Howe, and Joe Coelho, the Devils have consistently demonstrated their commitment to player development and competitive success. These efforts have resulted in over 25 young men from the program advancing to play collegiate baseball, a testament to the program's impact and the dedication of its coaches.
                    </div>
                </div>
            <Carousel/>
        </div>
        <div class="text-white text-center text-5xl font-dancing pt-[20px] mt-[50px] border-t-4 border-lightgrey pb-[10px] w-full ">Mission Statement</div>
        <div class=" pt-[30px]">
            <div class="pb-[30px] text-white text-xl leading-relaxed indent-8" >RI Devils Baseball, a 501(c)(3) non-profit organization, is committed to providing talented athletes with opportunities to compete against top national teams and showcase their skills to college coaches year-round. Our relentless daily efforts ensure that our athletes have the best possible chance to excel at higher levels of competition. We inspire players from various towns and cities across Rhode Island, motivating them to grasp the significance of their pursuits alongside supportive coaches and teammates.</div>
            <div class="pb-[30px] text-white text-xl leading-relaxed indent-8">Devils Baseball goes beyond developing outstanding baseball players; we nurture young men of character. In a Northeast region rich with travel programs, we instill the values and culture of Devils Baseball in all our athletes and their families. Our mission is to deliver exceptional coaching and year-round development programs that prepare players for success both on and off the field. We emphasize to our athletes that baseball is a pathway to realizing their dreams through hard work and dedication.</div>
            <div class="flex flex-row">
            <div class="text-white text-xl leading-relaxed indent-8">We tirelessly collaborate with college coaches nationwide to identify suitable collegiate opportunities for our athletes, organize participation in camps and showcases during their seasons, and host an annual scout day. As leaders, we are committed to inclusivity, striving to welcome athletes from all backgrounds into our organization, regardless of economic circumstances.</div>
                <CoachingCard/>
        </div>
    </div>
       
    </div>
    <Footer/>
    </div>
    
    </div>