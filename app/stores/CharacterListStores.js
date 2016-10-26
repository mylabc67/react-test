/**
 * Created by YileiMou on 10/23/16.
 */
import alt from '../alt';
import CharacterListActions from '../actions/CharacterListActions';

class CharacterListStores {
    constructor() {
        this.bindActions(CharacterListActions);
        this.characters = [];
    }

    onGetCharactersSuccess(data) {
        this.characters = data;
    }

    onGetCharactersFail(jqXhr) {
        toastr.error(jqXhr.responseJSON.message);
    }
}

export default alt.createStore(CharacterListStores);