module.exports = (sequelize, DataTypes) => {

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        usuarioId: {
            type: DataTypes.INTEGER
        },
        activo: {
            type: DataTypes.INTEGER(1)
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }

    const config = {
        tableName: "carritos"
    }

    const Carrito = sequelize.define("Carrito", cols, config);

    Carrito.associate = function(modelos){
        Carrito.belongsTo(modelos.Usuario, {
            as: "usuario",
            foreignKey: "usuarioId"
        }); 
        
        Carrito.belongsToMany(modelos.Producto, {
            as: "productos",
            through:"carritos_productos",
            foreignKey: "carritoId",
            otherKey: "productoId",
            timestamps: true
        });
    };
    
    return Carrito;
}