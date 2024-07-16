<script lang="typescript">
    import NavBar from "../../components/Navbar.svelte"
    import Footer from "../../components/Footer.svelte"
    import Socials from "../../components/socials.svelte";
</script>


<div class="bg-black">
<div class="flex flex-col relative min-h-screen max-w-[1920px] border-x-2  mx-auto border-darkgrey ">
    <NavBar/>
    <div class = "w-full justify-center items-center bg-black pb-[50px] px-[50px]">
        <div class="text-white text-center text-5xl font-dancing pt-[20px] border-b-4 pb-[10px] border-lightgrey w-full "> Contact Us</div>
        <div class="text-center text-white text-3xl pt-[20px]">Interested in learning more about the Rhode Island Devils Baseball Program? fill out the form below and a member of our staff will get back to you within 24-48 hours. Furthermore, you can email us at ri.deveils.baseball@gmail.com</div>
  </div>

  <div class="grid grid-cols-2">
    <form action="/submitted" data-netlify="true" data-netlify-honeypot="botfield" name="Contact" class="mx-[200px] my-[50px]">
        <input type="text" id="name" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-maroon focus:border-maroon block w-full p-2.5 mb-[25px] " required placeholder="Your Name">
        <input type="email" id="email" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-maroon focus:border-maroon block w-full p-2.5 mb-[25px] " required placeholder="Email">
        <input type="tel" id="tel" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-maroon focus:border-maroon block w-full p-2.5 mb-[25px] " required placeholder="Phone #">
        <fieldset>
            <label class="text-white text-2xl">Please select your preferred contact method</label>
            <div class="flex items-center mb-4 mt-4" >
            <input id="phonepreffered" type="radio" name="Preferred" value="Phone" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-maroon dark:focus:ring-maroon checked:bg-maroon" checked>
            <label for="phone-option" class="block ms-2  text-xl font-medium text-white dark:text-gray-300">
                Text
            </label>
            </div>
        
            <div class="flex items-center mb-4">
            <input id="emailpreferred" type="radio" name="Preferred" value="Email" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-maroon checked:bg-maroon">
            <label for="email-option" class="block ms-2 text-xl font-medium text-white dark:text-gray-300">
                Email
            </label>
            </div>
  </fieldset>
  <textarea id="message" rows="4" class="block p-2.5 w-full mt-[30px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-maroon focus:border-maroon "required placeholder="Leave a comment..."></textarea>
  <button type="submit" class="text-white bg-maroon hover:bg-lightgrey focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mt-[30px]">Submit</button>
  
  
    </form>
    <img src="logo/MainLogo.png" alt="Devils Logo" class="w-[800px] h-[600px]"/>
  </div>
 <Footer/>
  </div>
</div>