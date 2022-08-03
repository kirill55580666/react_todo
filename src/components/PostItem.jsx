import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const PostItem = ({remove, ...props}) => {
	const router = useNavigate()
	return (
		<div className="post">
			<div className="post__content" style={{marginRight: 30}}>
				<strong>{props.post.id}. {props.post.title}</strong>
				<div>
					{props.post.body}
				</div>
			</div>
			<div className="post__buttons">
				<MyButton style={{marginRight: 20}} className="post__button" onClick={() => remove(props.post)}>
					Удалить
				</MyButton>
				<MyButton className="post__button" onClick={() => {
					router(`../posts/${props.post.id}`)
				}}>
					Открыть
				</MyButton>
			</div>
		</div>
	);
};

export default PostItem;