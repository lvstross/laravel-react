<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TransformController extends Controller
{
    /**
     * Transform method that performs the overall text transformation
     *
     * @param \Illuminate\Http\Request $request
     * @return string
     */
    public function transform(Request $request): string
    {
        $modified = $request->modified;
        $modifier = $request->modifier;
        $text = $request->text;

        // Check if $modified is present in $text
        if(strpos($text, $modified) === false){
            return json_encode([
                'type' => 'danger',
                'responseText' => "There are no occurences of '$modifier' in your text."
            ]);
        }
        // If $modified is present, run through str_replace and return response in json
        $responseText = str_replace($modified, $modifier, $text);
        return json_encode([
            'type' => 'primary',
            'responseText' => "$responseText"
        ]);
    }
}
