/*
 *  Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 *  WSO2 Inc. licenses this file to you under the Apache License,
 *  Version 2.0 (the "License"); you may not use this file except
 *  in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing,
 *  software distributed under the License is distributed on an
 *  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, either express or implied.  See the License for the
 *  specific language governing permissions and limitations
 *  under the License.
 */

import React from 'react';
// Material UI Components
import Typography from 'material-ui/Typography';
import Card, {CardContent} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
// CSS
import '../index.css';

/**
 * Represent each Template Group, that is shown as a thumbnail
 */

// Styles related to this component
const styles = {
    card: {
        width: 345,
        height: 200,
        margin: 15
    },
    avatarButton: {
        color: 'white',
        width: 55,
        height: 55
    }
}

class TemplateGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            uuid: props.uuid,
            description: props.description
        }
    }

    /**
     * Generates initials to be shown in the avatar
     */
    generateAvatarInitials() {
        var avatarInitials = "";
        // Contains words split by space
        var splitWords = this.state.name.split(" ")

        if (splitWords.length >= 2) {
            // Two letter initials
            avatarInitials += (splitWords[0][0] + splitWords[splitWords.length - 1][0])
        } else {
            // One letter initial
            avatarInitials += splitWords[0][0]
        }

        return avatarInitials
    }

    /**
     * Generates a style with backgroundColor for the given name
     *
     * @param name
     * @returns {{style: {backgroundColor: string}}}
     */
    generateAvatarColor(name) {
        var hash = 0;
        for (let i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }

        var c = (hash & 0x00FFFFFF)
            .toString(16)
            .toUpperCase();

        var color = "00000".substring(0, 6 - c.length) + c;
        // Put the random color to an object
        let style = {backgroundColor: '#' + color.toString()}
        return {style}
    }

    /**
     * Generates style with a random backgroundColor, from an array of given colors
     * @returns {{style: {backgroundColor: string}}}
     */
    generateAvatarColor() {
        let colors = [
            '#009688',
            '#03A9F4',
            '#EF6C00',
            '#4527A0',
            '#C51162',
        ];
        // Put the random color to an object
        let style = {
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            width: 55,
            height: 55
        }
        return {style}
    }

    render() {
        return (
            <Card style={styles.card}>
                <CardContent>
                    <br/>
                    <Avatar style={this.generateAvatarColor()['style']}>
                        {this.generateAvatarInitials()}
                    </Avatar>
                    <br/>
                    <Typography type="headline" component="h2">
                        {this.state.name}
                    </Typography>
                    <Typography component="subheading" color="secondary">
                        {this.state.description}
                    </Typography>
                </CardContent>
            </Card>
        )
    }
}

export default TemplateGroup;
