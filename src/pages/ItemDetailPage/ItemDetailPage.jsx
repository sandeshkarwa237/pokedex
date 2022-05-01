import React, { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import "./ItemDetailPage.css";
import { capitalizeFirstLetter } from "../../utils/formatter";
import { Pill } from "../../components/common/Pill/Pill";
import { Icons } from "../../components/common/Icons/Icons";

am4core.useTheme(am4themes_animated);

export const ItemDetailPage = () => {
  const {
    state: { itemDetails },
  } = useLocation();
  const navigate = useNavigate({});
  const {
    types,
    height,
    weight,
    name,
    stats,
    abilities,
    sprites: {
      other: {
        dream_world: { front_default: thumbnailImage },
      },
    },
  } = itemDetails;

  useLayoutEffect(() => {
    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.marginRight = 400;

    // Create axes
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "statName";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 10;
    let label = categoryAxis.renderer.labels.template;
    label.wrap = true;
    label.width = 75;

    chart.yAxes.push(new am4charts.ValueAxis());

    stats.map(({ base_stat, stat: { name: statName } }) => {
      chart.data.push({ statName: statName, base_stat: base_stat });
    });

    chart.yAxes.push(new am4charts.ValueAxis());

    var series3 = chart.series.push(new am4charts.ColumnSeries());
    series3.dataFields.valueY = "base_stat";
    series3.dataFields.categoryX = "statName";

    // Add cursor
    chart.cursor = new am4charts.XYCursor();
  }, [stats]);

  return (
    <div className="item-details-container">
      <div className="float-start" onClick={() => navigate(`/`)}>
        <Icons type="backArrow" />
      </div>
      <div className="row">
        <div className="col-md-6 align-self-center">
          <img src={thumbnailImage} alt={name + " image"} width="75%" />
        </div>
        <div className="col-md-6">
          <h4 className="item-details-title">{capitalizeFirstLetter(name)}</h4>
          <div className="item-details-special">
            <p>Stats: </p>
            <p id="chartdiv" style={{ width: "100%", height: "500px" }}></p>
          </div>
          <div className="item-details-info-container">
            <div className="row item-details-text">
              <span className="col-md-6">Height: {height}'</span>
              <span className="col-md-6">Weight: {weight} kg</span>
            </div>
            <div className="item-details-text">
              Abilities:
              {abilities.map(
                ({ ability: { name: abilityName }, is_hidden }) => {
                  return (
                    !is_hidden && (
                      <span key={abilityName}>
                        {capitalizeFirstLetter(abilityName)}
                      </span>
                    )
                  );
                }
              )}
            </div>
            <div className="item-details-text">
              Type:
              {types.map(({ type: { name: pillText } }, index) => {
                return <Pill name={pillText} key={index} size="medium" />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
