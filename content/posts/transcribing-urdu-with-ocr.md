+++
date = '2024-08-29T02:46:37-07:00'
draft = false
title = 'Transcribing Urdu With OCR'
+++
My mother needed some help transcribing a document written in urdu. Normally this should as simple as copy and pasting from the document, but this was a pdf that only recorded glyphs?

I tried to use the OCR software from my iphone, which did detect the letters from the document, but it transcribed the letters as arabic. One of the problems with this is that the Urdu alphabet is a superset of arabic, so many letters were being incorrectly mapped.

After doing some research online, I found this great work from IIT Delhi where they actually created an Urdu OCR webapp which uses a text detection model (based off of YoloV8) and their own UTRNet. They even provided a live demo through hugging face here: https://abdur75648-urduocr-utrnet.hf.space/

Its really great to see work done on languages that dont have enough of a online presence.