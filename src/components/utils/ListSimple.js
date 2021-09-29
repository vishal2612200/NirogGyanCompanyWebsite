import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { List, ListItem, ListItemText, ListSubheader, Typography } from '@material-ui/core';

export default function ListSimple({ content: { heading, description } }) {
    return <List >

        <ListSubheader color="primary" style={{ position: "relative" }}>
            <Typography variant="h3" color="textPrimary" style={{marginBottom:"1rem"}}>
                {heading}
            </Typography>

        </ListSubheader>
        {description.map(item => (
            <ListItem>
                <ListItemText
                    primary={
                        <Typography variant="h6" color="textSecondary">
                            {item}
                        </Typography>
                    }

                />
            </ListItem>

        )
        )}
    </List>
}