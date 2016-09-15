import {FootballConnection} from '../connections/football';
export const init = app => {
  const connection = new FootballConnection();
  const options = {
    InfoSoapBindingAllPlayersWithYellowOrRedCardsInput:
    {
      bSortedByName: true,
      bSortedByYellowCards: true,
      bSortedByRedCards: true
    }
  };
  app.get('/api/v1/bad-boys',
    /**
    * register the device on the push Service
    *
    * @param req containing body JSON to pass as input.
    * @param res result of call is provided as JSON body data.
    * @param next function to invoke error handling.
    */
    // function serviceCall(req, res, next) {
    //   return connection.blzServiceSoap11BindingGetBank({ blz: req.params.id })
    //     .then(
    //     (result) => {
    //       return res.json(result);
    //     }
    //     , next).done();
    // }

    function serviceCall(req, res, next) {
      return connection.infoSoapBindingAllPlayersWithYellowOrRedCards(options)
        .then(
        (result) => {
          return res.json(result);
        }
        , next).done();
    }
  );
};
