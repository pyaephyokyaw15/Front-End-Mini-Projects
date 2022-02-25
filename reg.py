import re

video_url = 'https://www.tiktok.com/@minie13ever13/video/7053416636539358465'
tkRegex = r'.*tiktok.com*/.*/.*/(.*)'
tkMatch = re.search(tkRegex, video_url)
print(tkMatch.groups()[0])