import React from "react";
import Event from './Event'
const Calendar = () => {
    return (
        <div className = "Calendar">
            <table>
                <thead>
                    <tr>
                        <th>

                        </th>
                <th>Sunday</th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
                <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                
                    <tr>
                    {/*starting the times */}
            
                    <td className="time">8 am</td>
                    <Event event='Alex - Maternity' color ='green' location = 'Aventura Mall'/>
                    <td></td>{/*monday */}
                    <td></td>{/* Tuesday*/}
                    <td></td>{/*Wednesday */}
                    <td></td>{/* Thursday*/}
                    <Event event='Rebecca - Engagement ' color ='green' location = 'Tree Tops Park'/>{/*Friday*/}
                    <td></td>
                    </tr>

                    <tr>
                    <td className="time">9 am</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Plane to California' color ='pink' location = 'FLL Int'/>
                    <td></td>
                    <td></td>
                    <Event event='The Bean 🫘' color ='blue' location = 'Miami'/>
                    </tr>

                <tr>
                <td className="time">10am</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                <tr>
                <td className="time">11am</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <Event event = 'Brunch' color = 'grey' location = 'First Watch'/>
                <td></td>
                </tr>
                <tr>
                <td className="time">12pm</td>
                <Event event = 'Lunch w Paris' color = 'purple' location = 'Panera'/>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                <tr>
                <td className="time">1pm</td>
                <Event event = 'Valerie - Graduation' color = 'blue' location = 'Florida State University'/>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                <tr>
                <td className="time">2pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                <tr>
                <td className="time">3pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>

                <tr>
                <td className="time">4pm</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                <tr>
                <td className="time">5pm</td>
                
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                </tbody>
                            </table>
                        </div>

    )
}


export default Calendar;
