'use strict';

module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.addColumn(
            'Tips',
            'AuthorTip',
            {type: Sequelize.STRING}
        );
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.remoevColumn('Tips', 'AuthorTip');
    }
};