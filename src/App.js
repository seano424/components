import "./App.css";
import faker from "faker";
import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";

function App() {
  return (
    <div className="ui comments container">
      <ApprovalCard>Are your sure?</ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          faker={faker.image.image()}
          name="Sean"
          timeAgo="Today at 4:45pm"
          comment="this is interesting"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail faker={faker.image.image()} name="Dan">
          Hello!
        </CommentDetail>
      </ApprovalCard>
    </div>
  );
}

export default App;
