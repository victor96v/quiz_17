//lo de ls tips padre
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Tips',
            'AuthorName',
            {type: Sequelize.STRING}
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.removeColumn('Tips', 'AuthorName');
    }
};
