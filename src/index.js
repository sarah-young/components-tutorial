import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'
import faker from 'faker';


const App = () => {
    return (
        <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail fakerImg={faker.image.avatar()} author="Sam" timeAgo="Today @ 4:54PM" commentText="Hi!"/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail fakerImg={faker.image.avatar()} author="Jane" timeAgo="Today @ 2:00PM" commentText="Foo"/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail fakerImg={faker.image.avatar()} author="Matt" timeAgo="Today @ 6:43PM" commentText="Bar"/>
        </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
