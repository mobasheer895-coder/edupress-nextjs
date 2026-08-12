import FormComment from "@/components/auth/form/FormComment";
import Form from "@/components/auth/form/FormLogin"

const Comment = () => {
    const comentContent = {
    title: "Leave a comment",
    btnText : "Posts comment",
    subTitle : "Your email address will not be published. Required fields are marked *"
  };

  const commentInputs = [
    { type: "text", placeHolder: "Name*" , name : "text"},
    { type: "email", placeHolder: "Email*" , name : "email"},
    { type: "textArea", placeHolder: "Comment" , name : "textArea" },
    {type : "checkbox" , label : "Save my name, email in this brower for the next time I comment" , name : "checkbox", className: "w-5 h-5 cursor-pointer accent-orange-400 hover:accent-orange-500/90"}
  ];
    return (
        <div>
            <FormComment
                content={comentContent}
                input={commentInputs}
            />
        </div>
    )
}

export default Comment
