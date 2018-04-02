import React from 'react';
import { Button, Fade, Modal, ModalBody, ModalHeader, } from 'reactstrap';
import Percent from '../progress/progress'
import './content.css'
import Emoji from 'react-emoji-render';


class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fadeIn: false,
            modal: false,
            number: 50,
            output: "",
            percent: 0,
            pic : "",
            detail : ""
        };
        this.toggle = this.toggle.bind(this);
        this.randomNumber = this.randomNumber.bind(this)
        this.showPercent = this.showPercent.bind(this)
    }
    randomNumber() {
        const min = 1;
        const max = 100;
        const rand = Math.floor(Math.random() * 100) + 1;
        this.setState({ number: this.state.number + rand });
        this.passTwo()
        this.setPercent()
        this.toggle()
    }
    passTwo() {
        if (this.state.number % 2 === 0) {
            this.setState({ output: "⚫️ ก็ใบดำอ่ะนะ บรัยยยยยย",
                            detail : "ทำเวลาที่เหลือให้มีค่า ทำเเทนคนได้เเดงด้วย",
                            pic : "http://imgs.mcot.net/images/2018/04/1522579315682-600x0.png" })

        }
        else if (this.state.number % 2 !== 0) {
            this.setState({ output: "🔴 ใบเเดง จ้าาาา 🇹🇭",
                            detail : "ทบ ไหนไปวัดกันเอาเอง !!",
                            pic : "https://news.mthai.com/app/uploads/2014/04/110.jpg"})
        }
    }
    setPercent() {
        this.setState({
            percent: (this.state.number * 100) % 107
        })
    }
    showPercent() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
        this.setPercent()
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }


    render() {
        return (
            <div>
                <div className="btn-button">
                    <Button className="btn-button" color="primary" size="lg" onClick={this.randomNumber.bind(this)}> 🤪 จับเลย !! </Button>
                    <Button className="btn-button" color="success" size="lg" onClick={this.showPercent.bind(this)}>เเสดงเปอร์เซ็น</Button>
                </div>
                <Fade in={this.state.fadeIn} className="mt-3">
                    <Percent className="percent" SendPercent={this.state.percent} />
                    <p>100 - 75 : 😱😭 มึงโดนเเน่ !!</p>
                    <p>75 - 50 : 😰 มึงน่าจะโดนอยู่นะ !!</p>
                    <p>50 - 25 : 😓 มึงไม่โดนหลอก !!</p>
                    <p>25 - 1 :  😚 กลับบ้านไปดูดนมกล่องไปปปป</p>   
                </Fade>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>ผลที่ออก !!</ModalHeader>
                    <ModalBody className="modal-body">
                        <h1>{this.state.output}</h1>
                        <p>{this.state.detail}</p>
                        <img src={this.state.pic} className="modal-pic"/>
                    </ModalBody>
                </Modal>

            </div>
        );
    }
}

export default Content