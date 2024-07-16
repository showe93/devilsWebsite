<script>
    export let name = "unknown";
    export let coachingpositon= "unknown";
    export let experience = "unknown";
    export let img = "logo/DevilLogo.png";

</script>

<div class = "flex flex-col items-center px-[100px] pt-[50px] text-white ">
    <div class="text-4xl border-b-2 border-lightgrey w-[400px] text-center pb-[10px] mb-[20px] font-dancing">{name}</div>
    <img src={img} alt="Coach" class="w-[400px] h-[600px] border-8 mb-[20px] object-cover border-maroon"/>
    <div class = "text-3xl font-semibold mb-[10px]">{coachingpositon}</div>
    <div class="text-xl leading-relaxed indent-8">{experience}</div>
</div>