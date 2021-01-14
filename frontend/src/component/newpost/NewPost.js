import React from 'react';
import './NewPost.css';

const newPost =  () => {

    function maxlength(obj,wordLen){
        var len = obj.value.split(/[\s]+/);
        if(len.length > wordLen){
            alert("You cannot put more than "+wordLen+" words in this text area.");
        }
      }

    return(

        // <div className="new_post" onChange={maxlength(this, 200)}>
        <div className="new_post">   
            <form  className="new_post_form">
                <label htmlFor="write" className="new_post_form_label">Write whatever is in your Mind 🧐</label><br/>
                <textarea name="write" id="write" cols="100" rows="20" className="new_post_form_textarea" ></textarea><br/>
                <input type="submit" className="new_post_form_button"/>
            </form>
        </div>
    );
}

export default newPost;