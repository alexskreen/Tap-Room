import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import EditKegForm from "./EditKegForm";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null,
      editing: false,
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false,
      });
    } else {
      this.setState((prevState) => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  };

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false,
    });
  };

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(
      (keg) => keg.id === id
    )[0];
    this.setState({ selectedKeg: selectedKeg });
  };

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(
      (keg) => keg.id !== id
    );
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null,
    });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingKegInList = (kegToEdit) => {
    const editedMasterKegList = this.state.masterKegList
      .filter((keg) => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      masterKegList: editedMasterKegList,
      editing: false,
      selectedKeg: null,
    });
  };

  handleDrinkPint = (id) => {
    const newSelectedKeg = this.state.masterKegList.filter(
      (keg) => keg.id === id
    )[0];
    if (newSelectedKeg.pints === 0) {
      console.log("The hype is real. The keg is empty");
    } else {
      const newPints = newSelectedKeg.pints - 1;
      const newKegPint = { ...newSelectedKeg, pints: newPints };
      const oldKegList = this.state.masterKegList.filter(
        (keg) => keg.id !== id
      );
      this.setState({
        masterKegList: [...oldKegList, newKegPint],
        selectedKeg: newKegPint,
      });
    }
  };

  handleKegRefill = (id) => {
    const newSelectedKeg = this.state.masterKegList.filter(
      (keg) => keg.id === id
    )[0];
    if (newSelectedKeg.pints !== 0) {
      console.log("Can't refill that keg! It isn't empty yet");
    } else {
      const newPints = newSelectedKeg.pints +124;
      const newKegPint = { ...newSelectedKeg, pints: newPints };
      const oldKegList = this.state.masterKegList.filter(
        (keg) => keg.id !== id
      );
      this.setState({
        masterKegList: [...oldKegList, newKegPint],
        selectedKeg: newKegPint,
      });
    }
  };

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = (
        <EditKegForm
          keg={this.state.selectedKeg}
          onEditKeg={this.handleEditingKegInList}
        />
      );
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = (
        <KegDetail
          keg={this.state.selectedKeg}
          onClickingDelete={this.handleDeletingKeg}
          onClickingEdit={this.handleEditClick}
        />
      );
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = (
        <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      );
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = (
        <KegList
          kegList={this.state.masterKegList}
          onKegSelection={this.handleChangingSelectedKeg}
          onClickingDelete={this.handleDeletingKeg}
          onClickingDrink={this.handleDrinkPint}
          onClickingRefill={this.handleKegRefill}
        />
      );
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KegControl;
