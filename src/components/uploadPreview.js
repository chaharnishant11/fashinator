import React from "react";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

class UploadPreview extends React.Component {
    constructor(props) {
      super(props);
      this.state = { file: null };
      this.onChange = this.onChange.bind(this);
      this.resetFile = this.resetFile.bind(this);
    }
    onChange(event) {
      this.setState({
        file: URL.createObjectURL(event.target.files[0])
      });
    }
  
    resetFile(event) {
      event.preventDefault();
      this.setState({ file: null });
    }
    render() {
      return (
          <Container>
            <input type="file" onChange={this.onChange} />
            {this.state.file && (
                <div>
                <Button size="small" variant="contained" color="secondary" onClick={this.resetFile}>Remove File</Button>
                </div>
            )}
            <img style={{ width: "50%" }} src={this.state.file} />
        </Container>
      );
    }
  }

  export default UploadPreview;