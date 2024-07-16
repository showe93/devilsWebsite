<script>
    export let name = "unknown";
    export let team = "unknown";
    export let tournaments = "TBD";
    export let showcases = "TBD";
    export let cost = "TBD";
    export let description = "unknown";

</script>

<div class = "flex flex-col items-center px-[40px] pt-[50px] text-white ">
    <div class="text-4xl border-b-2 border-lightgrey w-[400px] text-center pb-[10px] mb-[20px] font-dancing">{team}</div>
    <div class = "text-xl leading-relaxed">Head Coach: {name}</div>
    <div class="text-xl leading-relaxed">Tournaments: {tournaments}</div>
    <div class="text-xl leading-relaxed">College Showcases: {showcases}</div>
    <div class="text-xl leading-relaxed">Cost: {cost}</div>
    <div class="text-xl leading-relaxed">{description}</div>
</div>