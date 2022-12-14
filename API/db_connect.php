<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
    header("HTTP/1.1 200 OK");
    die();
}
define('REFERRED_PERCENTAJE', 0.05);
define('REFERRED_PERCENTAJE_SECOND_LEVEL', 0.02);

define('REFERRED_COMISSION_PERCENTAJE', REFERRED_PERCENTAJE);
define('REFERRED_COMISSION_PERCENTAJE_SECOND_LEVEL', REFERRED_PERCENTAJE_SECOND_LEVEL);

define("QUERY_INSERT_USER", "INSERT INTO fressko_user (name, email, telephone, password, street, streetnumber, interior, colony, reference, activated) VALUES (?,?,?,?,?,?,?,?,?,?)");
define("QUERY_LOGIN", "SELECT iduser,password, activated FROM fressko_user WHERE telephone=?");
define("QUERY_SELECT_PRODUCTS", "SELECT * FROM fressko_product WHERE idcategory=?");
define("QUERY_SELECT_ALL_PRODUCTS", "SELECT * FROM fressko_product ORDER BY idcategory ASC");
define("QUERY_INSERT_ORDER", "INSERT INTO fressko_order (iduser,pickup,notes,pickupnotes,timestamp) VALUES (?,?,?,?,?)");
define("QUERY_INSERT_ORDER_CONTENT", "INSERT INTO fressko_order_content (idorder, idproduct,kg,pc,price) VALUES (?,?,?,?,?)");
define("QUERY_SELECT_ALL_USERS", "SELECT * FROM fressko_user");
define("QUERY_SELECT_ALL_USERS_BY_NAME", "SELECT * FROM fressko_user WHERE name LIKE ? ORDER BY name ASC");
define("QUERY_SELECT_USER_BY_ID", "SELECT * FROM fressko_user WHERE iduser=?");
define("QUERY_EDIT_USER", "UPDATE fressko_user SET name=?, email=?, telephone=?,street=?, streetnumber=?, interior=?, colony=?, reference=?, activated=?, is_promotor=? WHERE iduser=?");
define("QUERY_EDIT_USER_PASSWORD", "UPDATE fressko_user SET name=?, email=?, telephone=?,  password=? ,street=?, streetnumber=?, interior=?, colony=?, reference=?,activated=?, is_promotor=? WHERE iduser=?");
define("QUERY_INSERT_PRODUCT", "INSERT INTO fressko_product (idcategory, product, url, isKg, isPc, sum,weight, price, activated) VALUES (?,?,?,?,?,?,?,?,?)");
define("QUERY_EDIT_PRODUCT", "UPDATE fressko_product SET idcategory=?, product=?, isKg=?, isPc=?, sum=?, weight=?, price=?, activated=? WHERE idproduct=?");
define("QUERY_EDIT_PRODUCT_URL", "UPDATE fressko_product SET idcategory=?, product=?, url=?,  isKg=? ,isPc=?, sum=?, weight=?, price=?, activated=? WHERE idproduct=?");
define("QUERY_NOTIFICATIONS", "SELECT fressko_order.idorder, fressko_user.name FROM fressko_order JOIN fressko_user ON fressko_user.iduser=fressko_order.iduser");
define("QUERY_SELECT_ORDERS", "SELECT fressko_order.*, fressko_user.name,fressko_user.street,fressko_user.streetnumber,fressko_user.colony,fressko_user.telephone FROM fressko_order JOIN fressko_user ON fressko_user.iduser=fressko_order.iduser ORDER BY fressko_order.idorder DESC");
define("QUERY_SELECT_CONTENT_ORDER", "SELECT fressko_order_content.*, fressko_product.product FROM fressko_order_content JOIN fressko_product ON fressko_product.idproduct=fressko_order_content.idproduct WHERE fressko_order_content.idorder=?");
define("QUERY_SELECT_ORDERS_BY_DATE", "SELECT fressko_order.*,(Select sum(commission) from fressko_referred_commissions
where referido_id =fressko_user.iduser) as total_commissions, fressko_user.name,fressko_user.street,fressko_user.streetnumber,fressko_user.colony,fressko_user.telephone FROM fressko_order JOIN fressko_user ON fressko_user.iduser=fressko_order.iduser WHERE timestamp>? AND timestamp<=? ORDER BY fressko_order.idorder DESC");
define("QUERY_SELECT_ORDERS_USER", "SELECT fressko_order.*, fressko_user.name,fressko_user.street,fressko_user.streetnumber,fressko_user.colony,fressko_user.telephone FROM fressko_order JOIN fressko_user ON fressko_user.iduser=fressko_order.iduser WHERE fressko_order.iduser=? ORDER BY fressko_order.idorder DESC");
define("QUERY_SELECT_CATEGORIES", "SELECT * FROM fressko_categories where active = 1");
define("QUERY_VERIFICAR_COBERTURA", "SELECT * FROM fressko_cobertura where activo = 1 AND codigo_postal = ?");
define("QUERY_INSERT_USUARIO", "INSERT INTO fressko_user (`name`, email, telephone, `password`, street, streetnumber, colony, reference, activated, verificado, codigo_postal, codigo_verificacion, municipio, estado) VALUES (?,?,?,?,?,?,?,?,1,0,?,?,?,?)");
define("QUERY_SELECT_USER", "SELECT * FROM fressko_user WHERE iduser = ?");
define("QUERY_UPDATE_USER_VERIFICADO", "UPDATE fressko_user SET verificado = 1 WHERE iduser = ?");
define("QUERY_SELECT_PROMOTIONS_USER_DISCOUNT", "SELECT b.*, c.product, c.isKg, c.isPc, c.url FROM fressko_promotions_user a  JOIN fressko_promotions b ON a.id_promotion = b.id LEFT JOIN fressko_product c ON c.idproduct = b.id_product  WHERE a.id_user = ? AND CURDATE() BETWEEN init_date AND end_date AND active = 1 AND is_discount = 1 AND es_paquete = 0;");
define("QUERY_SELECT_PROMOTIONS_USER_DELIVERY", "SELECT b.*, c.product, c.isKg, c.isPc, c.url FROM fressko_promotions_user a  JOIN fressko_promotions b ON a.id_promotion = b.id LEFT JOIN fressko_product c ON c.idproduct = b.id_product  WHERE a.id_user = ? AND CURDATE() BETWEEN init_date AND end_date AND active = 1 AND free_delivery = 1 AND es_paquete = 0;");
define("QUERY_SELECT_PROMOTIONS_USER_FREE_PRODUCT", "SELECT b.*, c.product, c.isKg, c.isPc, c.url FROM fressko_promotions_user a  JOIN fressko_promotions b ON a.id_promotion = b.id LEFT JOIN fressko_product c ON c.idproduct = b.id_product  WHERE a.id_user = ? AND CURDATE() BETWEEN init_date AND end_date AND active = 1 AND is_free_product = 1 AND es_paquete = 0;");
define("QUERY_SELECT_PROMOTIONS_USER_PAQUETES", "SELECT b.*, c.product, c.isKg, c.isPc, c.url FROM fressko_promotions_user a  JOIN fressko_promotions b ON a.id_promotion = b.id LEFT JOIN fressko_product c ON c.idproduct = b.id_product  WHERE a.id_user = ? AND CURDATE() BETWEEN init_date AND end_date AND active = 1 AND b.es_paquete = 1;");
define("QUERY_GET_FLAGS", "SELECT * FROM fressko_config");
define("QUERY_SIN_COBERTURA", "INSERT INTO fressko_sin_cobertura (codigo_postal, correo, ts) VALUES (?,?,NOW())");
define("QUERY_INSERT_ORDER_V2", "INSERT INTO fressko_order (iduser,pickup,notes,pickupnotes,timestamp, free_delivery, discount, free_product, tipo_pago) VALUES (?,?,?,?,?,?,?,?,?)");
define("QUERY_UPDATE_PRICE", "UPDATE fressko_order SET subtotal = ? WHERE idorder = ?");
define("QUERY_GET_DEVICE_ID", "SELECT device_id FROM fressko_onesignal WHERE iduser = ?");
define("UPDATE_DEVICE_ID", "INSERT INTO fressko_onesignal(iduser, device_id) values (?,?) on duplicate key update device_id = ?;");
define("QUERY_GET_PROMOS", "select id, promotion_name, imagen, minimum_amount, description, IF(free_delivery = 1,'ENVIO GRATIS', 'DESCUENTO') as tipo_promo, discount_price from fressko_promotions ;");
define("TOKEN", "RBE_DEV_@_#_|__*");
define("QUERY_GET_PROMOS_USER", "SELECT * FROM (SELECT IF(c.es_paquete = 1,'PAQUETE','PROMOCION') as tipo, IF(( SELECT COUNT(*) FROM fressko_promotions_user x WHERE x.id_user= a.iduser AND x.id_promotion = ?) >= 1,1,0) as has_promotion, a.name, a.telephone, CONCAT(a.colony,' ', a.street,' ', a.streetnumber) as address, a.iduser FROM fressko_user a LEFT JOIN ( SELECT * FROM fressko_promotions WHERE id = ?) c ON 1 = 1 WHERE a.activated = 1 ) x ORDER BY has_promotion DESC");
define("INSERT_PROMO", "INSERT INTO fressko_promotions (promotion_name, `description`, free_delivery, is_discount, minimum_amount, discount_price, imagen, es_paquete) VALUES (?,?,?,?,?,?,?,?);");
define("UPDATE_PROMO", "UPDATE fressko_promotions SET promotion_name = ?, `description` = ?, free_delivery = ?, is_discount = ?, minimum_amount = ?, discount_price = ?, imagen = ? WHERE id = ?");
define("INSERT_USER_PROMO", "INSERT INTO fressko_promotions_user (id_promotion, id_user, init_date, end_date, active) VALUES (?,?, CURDATE(), CURDATE() + INTERVAL 3 YEAR, 1)");
define("DELETE_USER_PROMO", "DELETE FROM fressko_promotions_user WHERE id_promotion = ? AND id_user = ?");
define("INSERT_ANUNCIO", "INSERT INTO fressko_anuncios (imagen, titulo) VALUES (?,?)");
define("INSERT_ANUNCIO_USER", "INSERT INTO fressko_anuncios_user (id_anuncio, id_user) VALUES (?,?)");
define("QUERY_GET_ANUNCIOS", "SELECT * FROM fressko_anuncios");
define("UPDATE_ANUNCIO", "UPDATE fressko_anuncios SET imagen = ?, titulo = ? WHERE id = ?");
define("DELETE_ANUNCIO_USER", "DELETE FROM fressko_anuncios_user WHERE id_anuncio = ? AND id_user = ?");
define("GET_ANUNCIO_USER", "SELECT b.* FROM fressko_anuncios_user a JOIN fressko_anuncios b ON a.id_anuncio = b.id WHERE a.id_user = ?;");
define("GET_USERS_ANUNCIO", "SELECT * FROM (SELECT c.iduser, c.name, c.telephone, ( SELECT COUNT(*) FROM fressko_anuncios_user x WHERE x.id_user= c.iduser AND x.id_anuncio = ? ) as has_anuncio, CONCAT(c.colony,' ', c.street,' ', c.streetnumber) as address FROM fressko_user c LEFT JOIN ( SELECT * FROM fressko_anuncios a WHERE a.id = ? ) a ON 1 = 1 WHERE c.activated = 1 ) x ORDER BY has_anuncio DESC");
define("GET_SUBMENUS_CATEGORY", "SELECT id, nombre, id_category FROM fressko_submenu WHERE id_category = ?");
define("GET_PRODUCTS_SUBMENU_PRODUCTS", "SELECT b.* FROM fressko_submenu_productos a JOIN fressko_product b ON a.id_producto = b.idproduct WHERE a.id_submenu = ?");
define("GET_CATEGORYS", "SELECT * FROM fressko_categories ORDER BY category ASC");
define("GET_CATEGORYS_SUBMENU", "SELECT * FROM fressko_submenu WHERE id_category = ? ORDER BY nombre ASC");
define("GET_PRODUCTS_CATEGORY", "SELECT * FROM fressko_product WHERE idcategory = ?");
define("INSERT_SUBMENU", "INSERT INTO fressko_submenu (nombre, id_category) VALUES (?,?)");
define("UPDATE_SUBMENU", "UPDATE fressko_submenu SET nombre = ? WHERE id = ?");
define("DELETE_SUBMENU", "DELETE FROM fressko_submenu WHERE id = ?");
define("INSERT_PRODUCTO_SUBMENU", "INSERT INTO fressko_submenu_productos (id_submenu, id_producto) VALUES (?,?)");
define("DELETE_PRODUCTO_SUBMENU", "DELETE FROM fressko_submenu_productos WHERE id_submenu = ? AND id_producto = ?");
define("GET_PRODUCTS_SUBMENU", "SELECT id_producto as idproduct FROM fressko_submenu_productos WHERE id_submenu = ?");
define("GET_COBERTURAS", "SELECT * FROM fressko_cobertura ORDER BY codigo_postal ASC");
define("INSERT_COBERTURA", "INSERT INTO fressko_cobertura (codigo_postal,activo, fecha_registro) VALUES (?,1, NOW())");
define("UPDATE_COBERTURA", "UPDATE fressko_cobertura SET codigo_postal = ? WHERE id = ?");
define("DELETE_COBERTURA", "DELETE FROM fressko_cobertura WHERE id = ?");
define("INSERT_PROMO_NEW_USER", "INSERT INTO fressko_promotions_user (id_promotion, id_user, init_date, end_date, active) VALUES (?, ?, CURDATE(), CURDATE() + INTERVAL 4 YEAR, 1)");
define("INSERT_ANUNCIO_NEW_USER", "INSERT INTO fressko_anuncios_user (id_anuncio, id_user) VALUES (?, ?)");
define("INSERT_PAYMENT", "INSERT INTO fressko_payments (idorder, subtotal, id_paypal, email, nombre) VALUES (?, ?, ?, ?, ?)");
define("UPDATE_PAGADO", "UPDATE fressko_order SET pagado = 1 WHERE idorder = ?");
define("VALIDATE_CLIENTE", "SELECT iduser FROM fressko_user WHERE telephone = ?");
define("QUERY_VERIFY_REFERRED", "SELECT * FROM fressko_user WHERE activated = 1 AND telephone = ?");
define("QUERY_CHECK_REFERENCED", "SELECT * FROM fressko_referidos WHERE referenciado_id = ?");
define("INSERT_REFERENCED", "INSERT INTO fressko_referidos (referido_id, referenciado_id) VALUES (?,?)");
define("QUERY_SELECT_REFERRED_ORDERS_BY_DATE", "SELECT fressko_order.*, fressko_user.name,fressko_user.street,fressko_user.streetnumber,fressko_user.colony,fressko_user.telephone,fressko_user .iduser,fu_reff .name as referido_name,fu_reff.iduser as referido_id, fu_reff.is_promotor as referido_promotor,
(Select sum(commission) from fressko_referred_commissions
where referido_id =fressko_user.iduser) as total_commissions
  FROM fressko_order JOIN fressko_user ON fressko_user.iduser=fressko_order.iduser JOIN fressko_referidos fr ON fr.referenciado_id  =fressko_order.iduser JOIN fressko_user fu_reff ON fu_reff.iduser = fr .referido_id WHERE timestamp>? AND timestamp<=?  ORDER BY fressko_order.idorder DESC");
define("QUERY_SELECT_REFERRED_COMISSION_BY_ORDER_ID", "SELECT * from fressko_referred_commissions where order_id = ? and referido_id=?");
define("QUERY_INSERT_REFERRED_COMISSION", "INSERT INTO fressko_referred_commissions (order_id,referido_id,referenciado_id,commission,created_at,validity_at, commission_percentaje) values (?,?,?,?,?,?,?)");
define("QUERY_UPDATE_REFERRED_COMISSION", "UPDATE fressko_referred_commissions set commission=?, created_at=?, validity_at=? where order_id=? and referido_id=?");
define("QUERY_SELECT_REFERRED_COMISSIONS_BY_USER_ID", "SELECT fressko_referred_commissions.*, fressko_user.name from fressko_referred_commissions
left join fressko_user on fressko_referred_commissions.referenciado_id=fressko_user.iduser
 where (referido_id = ? and 
(validity_at is NULL  and active=1))
or 
(referido_id = ? and
(validity_at>? and active=1 and validity_at is not NULL))");

define("QUERY_SELECT_REFERRED_COMISSIONS", "SELECT 
(Select name from fressko_user where iduser=referido_id) as name,
(Select telephone  from fressko_user where iduser=referido_id) as telephone,
sum(commission) as commission,
referido_id,
validity_at
from fressko_referred_commissions frc
where 
(validity_at is NULL  and active=1)
or 
(validity_at>? and active=1 and validity_at is not NULL)
GROUP BY referido_id
");
define("QUERY_SELECT_REFERREDS_BY_USER_ID", "SELECT count(id) as total from fressko_referidos where referido_id = ?");
define("QUERY_UPDATE_APPLY_COMMISSIONS_BY_USER_ID", "UPDATE fressko_referred_commissions set active=0 where referido_id=?");
define("QUERY_INSERT_ADD_COMMISSION_BY_USER_ID", "Insert into fressko_referred_commissions
(order_id,referido_id,referenciado_id,commission,active,validity_at)
values(0,?,0,?,1,null)
");
define("QUERY_SELECT_REFERRED_HAVE_SECOND_LEVEL", "SELECT * from fressko_referidos where referenciado_id = ?");



// $dbConnection = new PDO('mysql:host=198.71.235.14;dbname=fressko', 'rbedev', '651_LCD_573_1850_933_e@rbe');
// $dbConnection = new PDO('mysql:host=localhost;dbname=fressko', 'rbedev', '651_LCD_573_1850_933_e@rbe');
//$dbConnection = new PDO('mysql:host=localhost;dbname=u569882363_mercasa', 'u569882363_mercasa', 'Contra123@');
//$dbConnection = new PDO('mysql:host=sql550.main-hosting.eu;dbname=u569882363_mercasa', 'u569882363_mercasa', 'Contra123@');
try {
    $dbConnection = new PDO('mysql:host=107.180.50.224;dbname=fressko', 'rbedev', '651_LCD_573_1850_933_e@rbe');
    $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $ex) {
    throw $ex->getMessage();
}
