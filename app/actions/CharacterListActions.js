/**
 * Created by YileiMou on 10/23/16.
 */
import alt from '../alt';

class CharacterListActions {
    constructor() {
        this.generateActions(
            'getCharactersSuccess',
            'getCharactersFail'
        );
    }

    getCharacters(payload) {
        let url = '/api/characters/tops';
        let params = {
            race: payload.race,
            bloodline: payload.bloodline
        };

        if (payload.category === 'female') {
            params.gender = 'female';
        } else {
            params.gender = 'male';
        }

        if (payload.category === 'shame') {
            url = '/api/characters/shame';
        }

        $.ajax({url: url, data: params})
            .done((data) => {
                this.actions.getCharactersSuccess(data);
            })
            .fail((jqXhr) => {
                this.actions.getCharactersFail(jqXhr);
            });
    }
}

export default alt.createActions(CharacterListActions);