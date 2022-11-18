import React, { Component } from "react";
import { Link } from "react-router-dom"
class footer extends Component {
    render() {

        return (
            <footer className="pie-pagina">
                <div className="grupo-1">
                    <div className="box">
                        <figure>
                            <Link href="/"><img src="/img/footer.png" className="footer-img"
                                alt="logo" /></Link>
                        </figure>
                    </div>
                    <div className="box">
                        <h2>SOBRE NOSOTROS</h2>
                        <p>somos una empresa dedicada a optimizar la forma en como se pueden optimizar el uso de servidores.</p>
                        <p>Diseñando la ruta optima en la utilizacion de los servicios somos <b>WHITESOFT</b></p>
                    </div>
                    <div className="box">
                        <h2>ADQUIERE NUESTROS SERVICIOS</h2>

                        <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png"
                            alt="visa" className="card-img" width="40" height="25" />
                        <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png"
                            alt="mastercard" className="card-img" width="40" height="25" />
                        <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png"
                            alt="amex" className="card-img" width="40" height="25" />
                        <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png"
                            alt="diners" className="card-img" width="40" height="25" />
                        <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/paypal@2x.png"
                            alt="paypal" className="card-img" width="40" height="25" />
                        <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/co/efecty@2x.png"
                            alt="co_efecty" className="card-img" width="40" height="25" />
                        <img src="//d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mercadopago@2x.png"
                            alt="mercadopago" className="card-img" width="40" height="25" />
                    </div>

                    <div className="box">
                        <h2>CONOCENOS</h2>
                        <div className="red-social">
                            <Link href="#" className="fa fa-facebook"></Link>
                            <Link href="https://www.instagram.com/soft.bold/" className="fa fa-instagram"></Link>
                            <Link href="https://twitter.com/SoftBold?t=shp9U3iIwnRauIlhuIjmhA&s=08" className="fa fa-twitter"></Link>
                            <Link href="#" className="fa fa-youtube"></Link>
                        </div>
                    </div>

                </div>

                <div className="grupo-2">
                    <small> &copy; 2022 <b>Slee Dw</b> - Todos los derechos Reservados.</small>
                </div>

            </footer>
        );
    }
}
export default footer;