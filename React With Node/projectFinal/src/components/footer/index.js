import React from 'react';

class Footer extends React.Component{
    render(){
        return (
            <div>
                CopyRight @{this.props.userName}
            </div>
        );
    }
}

Footer.defaultProps = {
    userName: 'Karthik'
}

export default Footer;