import {useForm} from "react-hook-form";
import {commentsService} from "../../services";

const CommentsForm = ({setComments}) => {

    const {handleSubmit,register,formState:{errors,isValid},reset} = useForm();

    const submit = async (comment) => {
        await commentsService.create(comment).then(({data})=>setComments(prev=>[...prev,data]))
        reset()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <button>CREATE</button>
            </form>
        </div>
    );
};

export {CommentsForm};