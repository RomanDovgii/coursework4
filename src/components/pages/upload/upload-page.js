import { useState } from "react";
import Wrapper from "../../styled-blocks/wrapper/wrapper";
import Button from "../../styled-blocks/form-parts/button/button";
import Form from "../../styled-blocks/form-parts/form/form";
import Label from "../../styled-blocks/form-parts/label/label";
import InputText from "../../styled-blocks/form-parts/input-text/input-text";
import { UploadWork } from "../../../store/actions/api-actions";
import { connect } from "react-redux";
import Textarea from "../../styled-blocks/form-parts/textarea/textarea";


function UploadPage(props) {
    const {onSubmit} = props;
    const [isError, setError] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [cover, setCover] = useState('')

    const titleHandler = (evt) => {
        setTitle(evt.target.value)
        setError("")
    }

    const descriptionHandler = (evt) => {
        setDescription(evt.target.value)
        setError("")
    }

    const coverHandler = (evt) => {
        setCover(evt.target.value)
        setError("")
    }


    const submitData = (evt) => {
        evt.preventDefault();
        if ((title !== '') && (description !== '') && (cover !== '')) {           
            const inputData = {
                title: title,
                description: description,
                cover: cover,
            }

            console.log(inputData)
            onSubmit(inputData);
        } else {
            setError(true);
        }
    }

    return <Wrapper>
        <Form>
            <Label err = {isError ? "t" : ""}>
                Title:
                <InputText 
                    type="text" 
                    name="title"
                    onChange={titleHandler} 
                    defaultValue={title}
                    err = {isError ? "t" : ""}
                />
            </Label>
            <Label err = {isError ? "t" : ""}>
                Description:
                <Textarea 
                    name="description"
                    onChange={descriptionHandler}
                    defaultValue={description}
                    height="10rem"
                    err = {isError ? "t" : ""}
                />
            </Label>
            <Label err = {isError ? "t" : ""}>
                Cover link:
                <InputText 
                    type="text" 
                    name="cover"
                    onChange={coverHandler}
                    defaultValue={cover}
                    err = {isError ? "t" : ""}
                />
            </Label>
            <Button 
                type="submit"
                onClick={submitData}
                err = {isError ? "t" : ""}
            >Send</Button>
        </Form>
    </Wrapper>
}

const mapStateToProps = ({DATA}) => ({
});

const mapDispatchToProps = (dispatch) =>({
    onSubmit(data) {
        dispatch(UploadWork(data));
    }
});

export {UploadPage};
export default connect(mapStateToProps, mapDispatchToProps)(UploadPage);