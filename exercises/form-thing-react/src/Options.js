import React from 'react'

function Options() {
    return (
        <div>
            <select name="greeting drop down" id="greeting-options">
                <option value="">hello</option>
                <option value="">hi</option>
                <option value="">Good day, all you fine people</option>
            </select>
            change color?<label></label><input type="checkbox"/>
            <label for="color">what color? <input id="color"/></label>
        </div>
    )
}

export default Options
