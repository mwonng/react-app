import React from 'react';
import '../style/header.css';

export const Header = () => {

  return (
    <section class="eHeaderStandard">
      <div id="eHeaderStandardSearchContent">
          <div>
              <form action="/searches/search" autocomplete="off" novalidate="novalidate" id="SearchSearchForm" method="get" accept-charset="utf-8">
                  <ul>
                      <li>
                          <span>Search for anything</span>
                      </li>
                      <li>
                          <input name="q" id="eHeaderStandardSearchInput" type="search" />
                      </li>
                      <li>
                          <input type="submit" value="Search" />
                      </li>
                  </ul>
              </form>        </div>
      </div>
      <div>
        <div>
            <ul>
                <li title="Search for products!">
                    <span id="eHeaderStandardSearchButton">Search</span>
                </li>
                <li>
                    <a href="/faqs" class="howItWorks">How It Works</a>                </li>
                <li>
                    <a href="/help" class="helpCentre">Help Centre</a>                </li>
                <li>
                    <a href="/"><img alt="Make It Mine" src="//images.mim/2015/logos/logo_04.desktop.png?1474871179" /></a>
                </li>
            </ul>
        </div>
        <div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <a href="/rentals/computers" class="computers"><span>Computers</span></a>                                <div>
                                    <ul>
                                        <li>
                                            <a href="/rentals/desktops" class="desktops">Desktops</a>                                        </li>
                                        <li>
                                            <a href="/rentals/laptops" class="laptops">Laptops</a>                                        </li>
                                        <li>
                                            <a href="/rentals/tablets" class="tablets">Tablets</a>                                        </li>
                                    </ul>
                                </div>
                            </td>
                            <td class="">
                                <a href="/rentals/entertainment" class="entertainment"><span>Entertainment</span></a>                                <div>
                                    <ul>
                                        <li>
                                            <a href="/rentals/tvs" class="tvs">TVs</a>                                        </li>
                                        <li>
                                            <a href="/rentals/gaming" class="gaming">Gaming</a>                                        </li>
                                        <li>
                                            <a href="/rentals/cameras" class="cameras">Cameras</a>                                        </li>
                                        <li>
                                            <a href="/rentals/stereos" class="stereos">Stereos</a>                                        </li>
                                    </ul>
                                </div>
                            </td>
                            <td class="">
                                <a href="/rentals/mobile-phones" class="phones">
                                  <span>Mobile<br/>Phones</span>
                                  </a>
                            </td>
                            <td>
                                <a href="/rentals/kitchen-laundry" class="kitchenLaundry"><span>Kitchen &amp;<br/>Laundry</span></a>                                <div>
                                    <ul>
                                        <li>
                                            <a href="/rentals/fridges" class="fridges">Fridges</a>                                        </li>
                                        <li>
                                            <a href="/rentals/freezers" class="freezers">Freezers</a>                                        </li>
                                        <li>
                                            <a href="/rentals/dishwashers" class="dishwashers">Dishwashers</a>                                        </li>
                                        <li>
                                            <a href="/rentals/washing-machines" class="washingMachines">Washing Machines</a>                                        </li>
                                        <li>
                                            <a href="/rentals/dryers" class="dryers">Dryers</a>                                        </li>
                                        <li>
                                            <a href="/rentals/small-appliances" class="smallAppliances">Small Appliances</a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                            <td>
                                <a href="/rentals/home-garden" class="homeGarden"><span>Home &amp;<br/>Garden</span></a>
                                  <div>
                                    <ul>
                                        <li>
                                            <a href="/rentals/heating-cooling" class="heatingCooling">Heating &amp; Cooling</a>                                        </li>
                                        <li>
                                            <a href="/rentals/floor-care" class="floorCare">Floor Care</a>                                        </li>
                                        <li>
                                            <a href="/rentals/fitness" class="fitness">Fitness</a>                                        </li>
                                        <li>
                                            <a href="/rentals/garden" class="garden">Garden</a>                                        </li>
                                        <li>
                                            <a href="/rentals/bbqs" class="bbqs">BBQs</a>                                        </li>
                                    </ul>
                                </div>
                            </td>
                            <td>
                                <a href="/rentals/furniture" class="furniture"><span>Furniture</span></a>                                <div >
                                    <ul>
                                        <li>
                                            <a href="/rentals/bedroom-furniture" class="bedroom">Bedroom</a>                                        </li>
                                        <li>
                                            <a href="/rentals/lounge-furniture" class="lounge">Lounge</a>                                        </li>
                                        <li>
                                            <a href="/rentals/dining-furniture" class="dining">Dining</a>                                        </li>
                                        <li>
                                            <a href="/rentals/office-furniture" class="office">Office</a>                                        </li>
                                        <li>
                                            <a href="/rentals/outdoor-furniture" class="outdoor">Outdoor</a>                                        </li>
                                    </ul>
                                </div>
                            </td>
                            <td>
                                <a href="/rentals/baby" class="baby"><span>Baby</span></a>                                <span>New!</span>
                            </td>
                            <td>
                                <p class="featured">
                                    <span>Featured</span>
                                </p>
                                <div >
                                    <ul>
                                        <li>
                                            <a href="/rentals/best-sellers">Best Sellers</a>                                        </li>
                                        <li>
                                            <a href="/rentals/new-arrivals">New Arrivals</a>                                        </li>
                                        <li>
                                            <a href="/rentals/price-drops">Price Drops</a>                                        </li>
                                        <li>
                                            <a href="/rentals/bundles">Bundles</a>                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>
  )
}