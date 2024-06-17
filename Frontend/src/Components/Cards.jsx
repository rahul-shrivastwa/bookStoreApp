function Cards({item}) {
    return (
        <>
            <div className="mt-4 my-3 p-3">
                <div className="card w-64 bg-base-100 shadow-xl hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border">
                    <figure><img src={item.image} alt="Shoes"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary text-white">{item.category}</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="rounded-lg border px-3 py-1 hover:bg-pink-500 hover:text-white duration-200 cursor-pointer">${item.price}</div> 
                            <div className="rounded-lg border px-3 py-1 hover:bg-pink-500 hover:text-white duration-200 cursor-pointer">Buy now</div>
                        </div>
                    </div>                      
                </div>            
            </div>        
        </>
    )
}

export default Cards;
