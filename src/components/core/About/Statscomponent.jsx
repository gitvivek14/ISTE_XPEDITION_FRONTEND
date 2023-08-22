import React from 'react'
const stats = [
    {count:"5K" , label:"Active Students"},
    {count:"5K" , label:"Mentors"},
    {count:"200" , label:"Courses"},
    {count:"50" , label:"Awards"},

]
    

const Statscomponent = () => {
  return (
    <section>
        <div>
            <div className='flex gap-5'>
                {
                    stats.map((data,idx)=>(
                        <div key={idx}>
                            <h1>
                                {data.count}
                            </h1>
                            <h2>
                                {data.label}
                            </h2>
                        </div>

                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Statscomponent