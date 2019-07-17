<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Template("base.html.twig")
     * @Route(
     *     "/{reactRouting}",
     *     name="index",
     *     requirements={"reactRouting"="^(?!api).+"},
     *     defaults={"reactRouting": null}
     *     )
     */
    public function indexAction()
    {
        return [];
    }
}
