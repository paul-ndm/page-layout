import React, { useEffect, useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Yacht from '../../bilder/Yacht.png'
import {Nav} from './Nav'
import { NewsSection1 } from './news/newsSection1'
import { NewsSection2 } from './news/newsSection2'
import { NewsSection3 } from './news/newsSection3'

interface Props {
    top: number | undefined
}

const useStyles = makeStyles<Theme, Props>((theme: Theme) =>
  createStyles({
    root: {
        position: "relative",
      },
      navSection: {
        height: "80px",
      position: "absolute",
      width: "100%",
      },
      yacht: {
        alt:"yachtyboy",
        width: "100%",
        clipPath: "polygon(100% 0, 100% 76%, 50% 85%, 0 76%, 0 0)",
        position: "relative",
        zIndex: -1,
      },
      newsDetails: {
          zIndex: -2,
          position: "absolute",
          top: props => props.top,
          // height: "360px",
          width: "100%"
      }
  }))

export const BigYacht = () => {

    const [yachtHeight, setYachtHeight] = useState<number>()

    // get the height of the Yacht-Picture on resize to adjust the distance of the news section from the top
    useEffect(() => {
        const handleResize = () => {
          const newHeight: HTMLElement | null = document.getElementById('theBigYacht')
          if (newHeight === null) {
            setYachtHeight(0)
          } else {
          setYachtHeight(newHeight.clientHeight * 0.75)}
        }
        handleResize()
        window.addEventListener('resize', handleResize)
      },[])

      const props : Props = {top: yachtHeight}

      const classes = useStyles(props)

    return (
        <div id="section1" className={classes.root}>
        <div className={classes.navSection}>
        <Nav />
        </div>

        <img
        id="theBigYacht"
        src={Yacht}
        className={classes.yacht}
        />
        
        <div id="newsSection" className={classes.newsDetails}>
        <NewsSection1/>
        <NewsSection2/>
        <NewsSection3/>
        </div>
        </div>
    );
};
