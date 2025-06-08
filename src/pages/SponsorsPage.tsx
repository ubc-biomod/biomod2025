function SponsorsPage() {
    return (
        
        <div className="bg-linear-to-bl from-pink-200 to-violet-300 h-500 p-10">
            
            <div className="ml-auto mr-auto w-4/5 20 bg-neutral-100 rounded-xl shadow-lg p-8">
                <h1 className="text-center font-bold text-[72px] text-bold opacity-100">Thank you to our Sponsors</h1>
                <h3 className="text-center font-bold text-[21px] text-bold">Our success in previous years wouldn't be possible without you.</h3>
            </div>


            <div className="ml-auto mr-auto w-4/5 20 bg-neutral-100 rounded-xl shadow-lg p-2 mt-10">
               <h2 className="text-center font-bold text-[36px] text-bold">Current Sponsors</h2>
            </div>

            <div className="text-center bg-neutral-100 w-4/5 m-auto rounded-xl mt-10 backdrop-blur-xs shadow-lg p-2">
                <table>
                    <tr>
                        <td><h3 className="text-center font-bold text-[36px] text-bold"> (insert text about sponsor)</h3></td>
                    
                        <td className="p-10">
                            <div className="content-right w-200 h-100 rounded-xl bg-slate-700 mr-auto ml-auto"></div>
                        </td>
                    </tr>
                </table>
            </div>            
                
         

            
            <div className="text-center bg-neutral-100 w-4/5 m-auto rounded-xl mt-20 backdrop-blur-xs shadow-lg p-2">
           
                <table>
                    <tr>
                        <td className="p-10"><h1 className="text-center font-bold text-[24px] text-bold">Want to support our cause? Become a sponsor!</h1>
                        <div className="w-100 h-100 rounded-xl bg-slate-700 mr-auto ml-auto"></div></td>
                        <td><h3 className="text-center font-bold text-[36px] text-bold">Our success in previous years wouldn't be possible without you.</h3>
                        <button className="mt-4 text-center font-normal text-[15px] w-50 h-15 bg-[#24436d] text-[#9db7d6] p-2 rounded-xl">Become a sponsor today!</button></td>
                    </tr>
                </table>
            </div>
        </div>
        
    )
}

export default SponsorsPage;
