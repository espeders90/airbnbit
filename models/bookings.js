//bookings table 

module.exports = function(sequelize, DataTypes) {

    var Booking = sequelize.define("Booking", {
        listId: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 10]
            }
        },
        arriveDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        leaveDate: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    });

    //need to associate Booking with homeListing and User

    Booking.associate = function(models) {
        Booking.belongsTo(models.HomeListing, {
            foreignKey: {
                allowNull: false
            }
        });
        Booking.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Booking;
};
