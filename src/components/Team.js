import { React } from 'react';
import CardTeam from './CardTeam';
import ImageFikri from '../assets/fikri.jpg'
import Imagerehan from '../assets/rehan.jpeg'
import Imagepacrul from '../assets/pacrul.jpeg'

const Team = () => {
    return (
        <div className="team" id="team">
            <div className="container">
                <h2>Our Teams</h2>
                <div className="row mt-5 mb-5">
                    <div className="col-md-4 mb-3">
                        <CardTeam
                            name="Muhammad Fikri"
                            npm="183112706450193"
                            desc="National university student informatics year 2018 class."
                            img={ImageFikri}
                            url="https://muhammadfikri.netlify.app" />
                    </div>
                    <div className="col-md-4 mb-3">
                        <CardTeam
                            name="Raihan Fikri"
                            npm="183112706450200"
                            desc="National university student informatics year 2018 class."
                            img={Imagerehan}
                            url="https://dribbble.com/raihanfikri" />
                    </div>
                    <div className="col-md-4 mb-3">
                        <CardTeam
                            name="Muhammad Pachrul Ariestyan"
                            npm="183112706450240"
                            desc="National university student informatics year 2018 class."
                            img={Imagepacrul}
                            url="https://dribbble.com/ariestyann" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team
