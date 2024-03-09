import React from 'react'
import OneRepMaxCalculator from '../../components/OneRepMaxCalculator'

export default function Calculator() {
    return (
        <section className='section-padding'>
            <h2 className='section-heading one-rep-max-heading'>One rep max calculator</h2>
            <p className='calculator-info-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Diam donec adipiscing tristique 
                risus. Ac auctor augue mauris augue neque gravida in. Auctor elit sed vulputate 
                mi sit amet mauris commodo. </p>
            <p className='calculator-info-text'>Vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt 
                lobortis. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. 
                Praesent tristique magna sit amet purus gravida. Ornare lectus sit amet est placerat. 
                Bibendum enim facilisis gravida neque convallis a. Vitae proin sagittis 
                nisl rhoncus mattis rhoncus urna. Integer vitae justo.</p>
            <p className='calculator-info-text'>Convallis aenean et tortor at risus viverra. Morbi non arcu risus quis varius quam quisque.
                 Tempus urna et pharetra pharetra. Amet venenatis urna cursus eget nunc scelerisque
                  viverra mauris in. Felis donec et odio pellentesque diam volutpat. Ultrices neque
                   ornare aenean euismod. Justo laoreet sit amet cursus sit. Facilisis volutpat est 
                   velit egestas dui id ornare. Turpis tincidunt id.</p>

            <OneRepMaxCalculator />
        </section>
        
    )
}