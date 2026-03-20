export function GlobalSpinner(){
    return <div className="absolute z-50 w-screen h-screen bg-gray-200/70 flex flex-col justify-center items-center">
        <div className="w-10 h-10 border border-neutral-900 border-dashed rounded-full animate-spin"/>
        <span>Almost there</span>
    </div>;
}