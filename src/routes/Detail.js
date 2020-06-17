import React from 'react';
import { Link } from 'react-router-dom';


class Detail extends React.Component {

    // 이런식으로 처리를 하면, 클릭을 하지 않고 url로 이동하는 것을 방지가능
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }

    render() {
        const { location } = this.props;
        // render 가 일어나고 componentDidMount 가 발생하기 때문에
        // 조건문으로 확인을 해주어야 에러가 안난다
        if(location.state) {
            return (
                <span>{location.state.title}</span>
            );
        } else {
            return null
        }
    }
}

export default Detail;